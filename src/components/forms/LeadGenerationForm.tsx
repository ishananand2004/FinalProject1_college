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
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";
import { treatmentCityOptions } from "@/constants/lead.constants";
import {
  CreateLeadFormSchema,
  ICreateLeadForm,
} from "@/data/schemas/lead.schema";
import { useFileUpload } from "@/hooks/useFileUpload";
import { cn, getCountryCodeFromGeolocation } from "@/lib/utils";
import { leadQueries } from "@/queries/lead.queries";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { ComponentProps, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import { Combobox } from "../ui/combobox";

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

  const [countryCode, setCountryCode] =
    useState<ComponentProps<typeof PhoneInput>["defaultCountry"]>("BD");

  const { uploading, fileUrls, uploadStatus, onDrop } = useFileUpload();

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "image/*": [".jpg", ".jpeg", ".png"],
    },
  });

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const a: any = getCountryCodeFromGeolocation();
    console.log("country code", a);
    setCountryCode(a);
  }, []);

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

        {status === "uploading" ? <Spinner /> : null}
      </li>
    )
  );

  const t = useTranslations("HomePage");

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
                  {t("Name")}
                  <sup className="text-destructive">*</sup>
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
                <FormLabel> {t("Preferred_Treatment_Location")} </FormLabel>
                <FormControl {...field}>
                  {/* <Input
                    placeholder="Bengaluru"
                    {...field}
                    className="bg-[#efefef]"
                  /> */}

                  <Combobox
                    options={treatmentCityOptions}
                    placeholder={t("Preferred_Treatment_Location")}
                    renderItem={(option) => (
                      <div className="flex flex-col">
                        <span>{option.label}</span>
                        <span className="text-xs text-muted-foreground">
                          {
                            (option as (typeof treatmentCityOptions)[number])
                              .country
                          }
                        </span>
                      </div>
                    )}
                    onValueChange={(value) =>
                      form.setValue("preferredTreatmentCity", value)
                    }
                    className="bg-[#efefef] w-full"
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
                  {t("Email_Address")}
                  <sup className="text-destructive">*</sup>
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
                  {t("Phone_Number")}
                  <sup className="text-destructive">*</sup>
                </FormLabel>
                <FormControl>
                  <PhoneInput
                    {...field}
                    defaultCountry={countryCode}
                    className="w-full bg-[#efefef] rounded-md"
                    placeholder="E.g. 8130600628"
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
              <FormLabel> {t("Medical_Issue")} </FormLabel>
              <FormControl>
                <Textarea
                  placeholder={t("Medical_Issue")}
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
              <FormLabel> {t("Reports")} </FormLabel>
              <FormControl>
                <div
                  {...getRootProps()}
                  className={cn(
                    `flex flex-col items-center justify-center border-dashed border rounded-md bg-[#efefef] min-h-16 p-4 text-gray-500 cursor-pointer`,
                    isDragActive
                      ? "border-primary"
                      : "border-secondary-foreground/40"
                  )}
                >
                  <input {...getInputProps()} id="reports" />
                  <p className="text-sm text-text/30 text-center">
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
          disabled={isPending || uploading} // Disable until uploads are complete
        >
          {isPending ? "Submitting..." : "Consult Now for Free"}
        </Button>
      </form>
    </Form>
  );
}
