import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import ct from "countries-and-timezones";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Function to convert camelCase to snake_case
export const camelToSnake = (str: string): string =>
  str.replace(/[A-Z]/g, (match) => `_${match.toLowerCase()}`);

// Function to recursively convert an object with camelCase keys to snake_case
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const convertKeysToSnakeCase = (obj: any): any => {
  if (Array.isArray(obj)) {
    return obj.map(convertKeysToSnakeCase);
  } else if (obj !== null && typeof obj === "object") {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [
        camelToSnake(key),
        convertKeysToSnakeCase(value),
      ])
    );
  }
  return obj;
};

export const getCountryCodeFromGeolocation = () => {
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return ct.getCountryForTimezone(tz)?.id || "IN";
};
