import { router } from "react-query-kit";
import axios from "axios";

// Interface for each uploaded file info
interface FileUploadInfo {
  name: string;
  url: string;
  uploadStatus: "uploading" | "success" | "failed"; // Statuses: uploading, success, failed
  etag: string;
}

export const fileQueries = router("files", {
  // Fetch list of files in the S3 bucket
  list: router.query({
    fetcher: async () => {
      try {
        const response = await axios.get("/api/files");
        return response.data.contents; // Extract the file contents from the response
      } catch (error) {
        throw new Error("Failed to fetch files" + JSON.stringify(error));
      }
    },
  }),

  // Upload a file or multiple files to the S3 bucket
  upload: router.mutation({
    mutationFn: async (variables: { files: File[] }) => {
      const formData = new FormData();
      variables.files.forEach((file) => {
        formData.append("file", file); // Append files to FormData
      });

      try {
        const response = await axios.post<FileUploadInfo[]>(
          "/api/files",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data", // Ensures we send the files as multipart
            },
          }
        );

        // Return the list of uploaded file info from the server response
        return response.data;
      } catch (e) {
        throw new Error("Failed to upload files" + JSON.stringify(e));
      }
    },
  }),
});
