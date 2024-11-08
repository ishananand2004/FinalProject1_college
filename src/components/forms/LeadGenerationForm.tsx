// components/LeadGenerationForm.tsx
"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import { Textarea } from "@/components/ui/textarea";
import { useFileUpload } from "@/hooks/useFileUpload"; // Import the custom hook
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Icon } from "../ui/icon";

// Define schema with zod
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  location: z.string().optional(),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." }),
  medicalIssue: z.string().optional(),
  files: z.array(z.instanceof(File)).optional(), // Specify array of File instances
});

// Define TypeScript type for the form data
type FormData = z.infer<typeof formSchema>;

export function LeadGenerationForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      location: "",
      email: "",
      phone: "",
      medicalIssue: "",
      files: [], // Initialize files as an empty array
    },
  });

  const { uploading, fileUrls, uploadStatus, onDrop } = useFileUpload(); // Use the custom hook for file upload

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "image/*": [".jpg", ".jpeg", ".png"],
    },
  });

  const onSubmit = (data: FormData) => {
    // Send the form data with only the uploaded file URLs
    const leadData = {
      ...data,
      files: fileUrls.map((file) => file.url), // Attach only the URLs of uploaded files
    };

    console.log("Form data submitted:", leadData);

    // Here you can submit the `leadData` to your server or backend endpoint
    // For example, using a mutation or API call:
    // await leadMutation.mutateAsync(leadData);
  };

  const filesEl = Object.entries(uploadStatus).map(
    ([fileName, status]: [string, "uploading" | "success" | "failed"]) => (
      <li
        className="flex justify-between bg-input rounded-sm p-2 gap-2"
        key={fileName}
      >
        <span className=" text-xs ">{fileName}</span>

        {
          status === "uploading" ? (
            <Icon provider="phosphor" name="Spinner" className="animate-spin" />
          ) : null
          // <Icon provider="phosphor" name="X" />
        }
      </li>
    )
  );

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>
                  Name<sup className="text-destructive">*</sup>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="E.g. John Doe"
                    {...field}
                    required
                    className="bg-[#efefef]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Preferred Treatment Location</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Bengaluru"
                    {...field}
                    className="bg-[#efefef]"
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>
                  Email Address<sup className="text-destructive">*</sup>
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="E.g. john@doe.com"
                    {...field}
                    required
                    className="bg-[#efefef]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>
                  Phone<sup className="text-destructive">*</sup>
                </FormLabel>
                <FormControl>
                  <PhoneInput
                    {...field}
                    defaultCountry="BD"
                    className="w-full bg-[#efefef] rounded-md"
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="medicalIssue"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Medical Issue</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Medical Issue"
                  className="h-28 bg-[#efefef] resize-none"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="files"
          render={() => (
            <FormItem>
              <FormLabel>Reports</FormLabel>
              <FormControl>
                <div
                  {...getRootProps()}
                  className={cn(
                    `flex flex-col items-center justify-center border rounded-md bg-[#efefef] min-h-16 p-4 text-gray-500 cursor-pointer`,
                    isDragActive ? "border-pink-500" : "border-transparent"
                  )}
                >
                  <input {...getInputProps()} id="reports" />
                  <p className="text-sm text-text/30 text-center pt-4">
                    Drag and drop a file here or click to select file locally.
                  </p>
                </div>
              </FormControl>
              <FormMessage />
              <ul className="flex flex-wrap gap-2 justify-center items-center mt-auto">
                {filesEl}
              </ul>
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-40 bg-rose-600 hover:bg-rose-700 text-white"
          disabled={uploading || fileUrls.length === 0} // Disable until uploads are complete
        >
          {uploading ? "Uploading..." : "Consult Now for Free"}
        </Button>
      </form>
    </Form>
  );
}
