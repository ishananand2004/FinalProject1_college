"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { TermsAndConditions } from "./components/TermsAndCondition";




export default function TermsPage() {
  return (
    <><div className="h-[440px] flex flex-col items-center justify-center bg-[#f1f5fd] bg-no-repeat bg-center p-4">
      <div className="w-full max-w-2xl text-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Terms and Conditions
        </h1>
        <Breadcrumb className="mt-10 justify-items-center">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="hover:text-blue-500">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-gray-500">Terms and Conditions</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
    <div className="min-h-screen relative z-30">
      <TermsAndConditions/>
      </div></>
    
  );
}