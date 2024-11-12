/* eslint-disable @typescript-eslint/no-unused-vars */
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
import {
  CreateLeadFormSchema,
  ICreateLeadForm,
} from "@/data/schemas/lead.schema";
import { useFileUpload } from "@/hooks/useFileUpload";
import { cn } from "@/lib/utils";
import { leadQueries } from "@/queries/lead.queries";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import { Icon } from "../ui/icon";

export function LeadGenerationForm() {
  const form = useForm<ICreateLeadForm>({
    mode: "all",
    resolver: zodResolver(CreateLeadFormSchema),
    defaultValues: {
      firstName: "",
      preferredTreatmentCity: "",
      email: "",
      phone: "",
      medicalIssue: "",
      reports: [],
    },
    criteriaMode: "all",
  });

  const { uploading, fileUrls, uploadStatus, onDrop } = useFileUpload();

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "image/*": [".jpg", ".jpeg", ".png"],
    },
  });

  // Use the mutation hook from react-query-kit
  const {
    mutateAsync: createLead,
    isPending,
    error,
  } = leadQueries.createLead.useMutation({});

  const onSubmit = async (data: ICreateLeadForm) => {
    const leadData = {
      ...data,
      reports: fileUrls.map((file) => file.url),
    };

    // Convert keys to snake_case

    try {
      // Call the mutation to create the lead
      await createLead(leadData);
      console.log("Lead created successfully!");
    } catch (err) {
      console.error("Error creating lead:", err);
    }
  };

  const filesEl = Object.entries(uploadStatus).map(
    ([fileName, status]: [string, "uploading" | "success" | "failed"]) => (
      <li
        className="flex justify-between bg-input rounded-sm p-2 gap-2"
        key={fileName}
      >
        <span className=" text-xs ">{fileName}</span>

        {status === "uploading" ? (
          <Icon provider="phosphor" name="Spinner" className="animate-spin" />
        ) : null}
      </li>
    )
  );

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {error ? (
          <div className="text-destructive">
            {error.message || "Unexpected error"}
          </div>
        ) : null}
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <FormField
            control={form.control}
            name="firstName"
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
            name={"preferredTreatmentCity"}
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Preferred Location</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Bengaluru"
                    {...field}
                    className="bg-[#efefef]"
                  />
                </FormControl>
                <FormMessage />
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
              <FormMessage />
            </FormItem>
          )}
        />

          <FormField
            control={form.control}
            name="reports"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Reports</FormLabel>
                <FormControl>
                  <div
                    {...getRootProps()}
                    className={`flex items-center justify-center border rounded-md bg-[#efefef] h-28 p-4 text-gray-500 ${
                      isDragActive ? "border-pink-500" : "border-transparent"
                    }`}
                  >
                    <input {...getInputProps()} id="reports" />
                    {isDragActive ? (
                      <p className="text-rose-600">Drop the files here...</p>
                    ) : (
                      <p>
                        Drag and Drop (or{" "}
                        <span className="text-sky-400 hover:underline cursor-pointer">
                          Choose Files
                        </span>
                        )
                      </p>
                    )}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

        <Button
          type="submit"
          className="w-40 bg-rose-600 hover:bg-rose-700 text-white"
          disabled={isPending || uploading} // Disable until uploads are complete
        >
          {isPending ? "Submitting..." : "Consult Now for Free"}
        </Button>
      </form>
    </Form>
  );
}
