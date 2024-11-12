import { Option } from "@/types";

export const leadOptions: (Option & {
  country: "India" | "Thailand" | "Israel";
})[] = [
  {
    value: "delhi_ncr",
    label: "Delhi NCR",
    country: "India",
  },
  { value: "mumbai", label: "Mumbai", country: "India" },
  { value: "chennai", label: "Chennai", country: "India" },
  {
    value: "bangalore",
    label: "Bangalore",
    country: "India",
  },
  { value: "kolkata", label: "Kolkata", country: "India" },
  { value: "kochi", label: "Kochi", country: "India" },
  {
    value: "hyderabad",
    label: "Hyderabad",
    country: "India",
  },
  {
    value: "other_india",
    label: "Others",
    country: "India",
  },
  {
    value: "bangkok",
    label: "Bangkok",
    country: "Thailand",
  },
  {
    value: "other_thailand",
    label: "Others",
    country: "Thailand",
  },
  {
    value: "other_israel",
    label: "Others",
    country: "Israel",
  },
];
