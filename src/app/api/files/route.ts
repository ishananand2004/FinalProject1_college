import { NextRequest, NextResponse } from "next/server";
import {
  S3Client,
  ListObjectsCommand,
  PutObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";
import { ulid } from "ulid";

const Bucket = process.env.NEXT_AWS_S3_BUCKET;
const s3 = new S3Client({
  region: process.env.NEXT_AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_AWS_S3_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.NEXT_AWS_S3_ACCESS_KEY_SECRET as string,
  },
});

// Sanitize the filename to make it URL-safe
const sanitizeFileName = (fileName: string) => {
  // Remove any special characters and spaces, and replace spaces with underscores
  return fileName
    .replace(/\s+/g, "_") // Replace spaces with underscores
    .replace(/[^\w.-]+/g, "") // Remove special characters (except for letters, numbers, period, and dash)
    .toLowerCase(); // Optional: make it lowercase for uniformity
};

// Endpoint to get the list of files in the bucket /api/files
export async function GET() {
  try {
    const response = await s3.send(new ListObjectsCommand({ Bucket }));
    return NextResponse.json(response?.Contents ?? []);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to list files", details: error },
      { status: 500 }
    );
  }
}

// Endpoint to upload a file to the bucket /api/files
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const files = formData.getAll("file") as File[];

    const uploadedFilesInfo = await Promise.all(
      files.map(async (file) => {
        const uniqueFilename = `report_${ulid()}_${sanitizeFileName(
          file.name
        )}`; // Sanitize and add unique ID
        const Body = (await file.arrayBuffer()) as Buffer;

        // Upload the file to S3
        const uploadResponse = await s3.send(
          new PutObjectCommand({
            Bucket,
            Key: uniqueFilename,
            Body,
          })
        );

        const sanitizedFileName = encodeURIComponent(uniqueFilename).replace(
          /%20/g,
          "+"
        );
        const fileUrl = `https://${Bucket}.s3.${process.env.NEXT_AWS_S3_REGION}.amazonaws.com/${sanitizedFileName}`;

        return {
          name: uniqueFilename,
          url: fileUrl,
          uploadStatus: "success",
          etag: uploadResponse.ETag,
        };
      })
    );

    return NextResponse.json(uploadedFilesInfo);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to upload files", details: error },
      { status: 500 }
    );
  }
}

// Endpoint to delete a file from the bucket /api/files
export async function DELETE(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const key = url.searchParams.get("key");

    if (!key) {
      return NextResponse.json(
        { error: "File key is required" },
        { status: 400 }
      );
    }

    const deleteResponse = await s3.send(
      new DeleteObjectCommand({
        Bucket,
        Key: key,
      })
    );

    if (deleteResponse.$metadata.httpStatusCode === 204) {
      return NextResponse.json({ message: `File ${key} deleted successfully` });
    } else {
      return NextResponse.json(
        { error: "Failed to delete file" },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete file", details: error },
      { status: 500 }
    );
  }
}
