import { isValidNumber, parsePhoneNumber } from "libphonenumber-js";
import { z } from "zod";

export const PhoneNumberSchema = z
  .string()
  .min(10, { message: "Phone number must be at least 10 digits" })
  .refine(
    (value) => {
      try {
        return isValidNumber(value);
      } catch {
        return false;
      }
    },
    {
      message: "Phone number is not valid",
    }
  )
  .transform((value) => {
    try {
      return parsePhoneNumber(value)?.number ?? null;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      console.log("Error parsing the number:", e.message);
      return value ?? null;
    }
  });
