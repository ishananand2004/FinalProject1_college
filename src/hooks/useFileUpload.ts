// hooks/useFileUpload.ts
import { fileQueries } from "@/queries/files.queries"; // Assuming this is where your mutation comes from
import { useMemo, useState } from "react";

// Generic type for the files being uploaded
export type UploadedFile = {
  url: string;
  name: string;
  status: string;
};

export function useFileUpload() {
  const [fileUrls, setFileUrls] = useState<UploadedFile[]>([]); // To store the uploaded file URLs
  const [uploadStatus, setUploadStatus] = useState<{
    [key: string]: "uploading" | "success" | "failed";
  }>({});

  const uploading = useMemo(() => {
    const statuses = Object.values(uploadStatus);

    if (statuses.some((el) => el === "uploading")) return true;

    return false;
  }, [uploadStatus]);
  // Use the file upload mutation (assuming it's from react-query)
  const uploadMutation = fileQueries.upload.useMutation({
    onSuccess: (data, variables) => {
      const uploadedFileUrl = data[0]?.url;
      if (uploadedFileUrl) {
        // Track the file URL and update status as 'success'
        setFileUrls((prev) => [
          ...prev,
          {
            url: uploadedFileUrl,
            name: variables.files[0].name,
            status: "success",
          },
        ]);
        setUploadStatus((prev) => ({
          ...prev,
          [variables.files[0].name]: "success", // Update the status of the specific file
        }));
      }
      // checkIfAllUploadsComplete();
    },
    onError: (error, variables) => {
      // Update the status of the specific file as 'failed'
      setUploadStatus((prev) => ({
        ...prev,
        [variables.files[0].name]: "failed", // Update the status of the specific file
      }));
      // checkIfAllUploadsComplete();
    },
  });

  // Function to check if all uploads are complete
  // const checkIfAllUploadsComplete = () => {
  //   const allComplete = Object.values(uploadStatus).every(
  //     (status) => status === "success" || status === "failed"
  //   );
  //   if (allComplete) {
  //     setUploading(false); // If all files are done, stop showing the "Uploading" state
  //   }
  // };

  // Handle file drops and trigger uploads
  const onDrop = (acceptedFiles: File[]) => {
    // setUploading(true); // Start uploading as soon as files are dropped

    acceptedFiles.forEach((file) => {
      setUploadStatus((prev) => ({ ...prev, [file.name]: "uploading" }));
      uploadMutation.mutate({ files: [file] }); // Upload the file
    });
  };

  // Configure the dropzone within the hook
  // const { getRootProps, getInputProps, isDragActive } = useDropzone({
  //   onDrop,
  //   accept: {
  //     "application/pdf": [".pdf"],
  //     "image/*": [".jpg", ".jpeg", ".png"],
  //   },
  // });

  return {
    uploading,
    fileUrls,
    uploadStatus,
    onDrop,
  };
}
