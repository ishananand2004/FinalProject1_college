"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import { z } from "zod";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { PhoneInput } from "@/components/ui/phone-input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Define schema with zod
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  location: z.string().optional(),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
  medicalIssue: z.string().optional(),
  files: z.array(z.instanceof(File)).optional(), // Specify array of File instances
})

// Define TypeScript type for the form data
type FormData = z.infer<typeof formSchema>

export default function LeadGenerationForm() {
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
  })

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  const onDrop = (acceptedFiles: File[]) => {
    form.setValue("files", acceptedFiles as FormData["files"]) // Update files state with explicit typing
    console.log('Files dropped:', acceptedFiles)
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'application/pdf': ['.pdf'], 'image/*': ['.jpg', '.jpeg', '.png'] },
  })

  return (
    <div className="lg:absolute top-24 right-28 max-w-md mx-auto p-6 border border-pink-300 rounded-3xl shadow-lg bg-white sm:max-w-lg lg:max-w-2xl">
      <h2 className="text-2xl font-bold text-pink-600 mb-6">Need Help? Let's Talk!</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:space-x-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="E.g. John Doe" {...field} required className="bg-[#efefef] w-[17vw] "/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred Treatment Location</FormLabel>
                  <FormControl>
                    <Input placeholder="Bengaluru" {...field} className="bg-[#efefef] w-[17vw] "/>
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
                <FormItem>
                  <FormLabel>Email Address *</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="E.g. john@doe.com" {...field} required className="bg-[#efefef] w-[17vw] "/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone *</FormLabel>
                  <FormControl>
                    <PhoneInput
                      {...field}
                      defaultCountry="IN"
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
                  <Textarea placeholder="Medical Issue" className="h-32 bg-[#efefef] resize-none" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="files"
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
                      <p>Drag and Drop (or <span className="text-sky-400 hover:underline cursor-pointer">Choose Files</span>)</p>
                    )}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-40 bg-rose-600 hover:bg-rose-700 text-white">
            Consult Now for Free
          </Button>
        </form>
      </Form>
    </div>
  )
}
