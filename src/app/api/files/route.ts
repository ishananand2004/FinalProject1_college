import { NextRequest, NextResponse } from "next/server";
import {
  S3Client,
  ListObjectsCommand,
  PutObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";

const Bucket = process.env.NEXT_AWS_S3_BUCKET;
const s3 = new S3Client({
  region: process.env.NEXT_AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_AWS_S3_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.NEXT_AWS_S3_ACCESS_KEY_SECRET as string,
  },
});

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

    // Array to hold the URLs or object info
    const uploadedFilesInfo = await Promise.all(
      files.map(async (file) => {
        // Convert the file to a buffer to send to S3
        const Body = (await file.arrayBuffer()) as Buffer;

        // Upload the file to S3
        const uploadResponse = await s3.send(
          new PutObjectCommand({
            Bucket,
            Key: file.name,
            Body,
          })
        );

        // Generate the file URL (this assumes your S3 bucket is publicly accessible)
        const fileUrl = `https://${Bucket}.s3.${process.env.NEXT_AWS_S3_REGION}.amazonaws.com/${file.name}`;

        return {
          name: file.name,
          url: fileUrl, // The URL for the uploaded file
          uploadStatus: "success",
          // You can include other S3 response info like the ETag if needed
          etag: uploadResponse.ETag,
        };
      })
    );

    // Return the response with the file URLs and status
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
    // Extract file key (name or path) from the query string or body
    const url = new URL(request.url);
    const key = url.searchParams.get("key");

    if (!key) {
      return NextResponse.json(
        { error: "File key is required" },
        { status: 400 }
      );
    }

    // Delete the file from S3
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
