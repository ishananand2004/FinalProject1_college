import { array, object, string, z } from "zod";

export const CreateLeadFormSchema = object({
  firstName: string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  preferredTreatmentCity: string().min(2),
  email: string().email({ message: "Please enter a valid email address." }),
  phone: string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  medicalIssue: string().optional(),
  reports: array(string().url()).optional(), // Specify array of File instances
});

export type ICreateLeadForm = z.infer<typeof CreateLeadFormSchema>;
