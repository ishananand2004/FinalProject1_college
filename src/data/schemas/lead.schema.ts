import { array, object, string, z } from "zod";
import { PhoneNumberSchema } from "./shared.schema";

export const CreateLeadFormSchema = object({
  firstName: string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  preferredTreatmentCity: string().describe("Preferred Location").min(2, {
    message: "Invalid Preferred Location",
  }),
  email: string().email({ message: "Please enter a valid email address." }),
  phone: PhoneNumberSchema,
  medicalIssue: string().optional(),
  reports: array(string().url()).optional(), // Specify array of File instances
});

export type ICreateLeadForm = z.infer<typeof CreateLeadFormSchema>;
