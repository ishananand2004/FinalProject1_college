"use client";
// import { PhoneInput } from "@/components/ui/phoneInput"
import { FaChevronRight } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
// import { LeadGenerationForm } from "../../components/forms/LeadGenerationForm";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { LeadGenerationForm } from "@/components/forms/LeadGenerationForm";
import { useTranslations } from "next-intl";
import Link from "next/link";
// (props) ye tha important h
export default function Contacts() {
  const t = useTranslations("Contacts");
  return (
    <>
      <div className="relative bg-blue-100 h-[50vh] py-20 ">
        <div className="container mx-auto text-center flex items-center justify-center h-full">
          <div className="pt-8">
            <h1 className="text-5xl font-semibold text-gray-800">
              {t("Get")}
            </h1>
            <div className="flex justify-center items-center mt-5 gap-x-2">
              <Link href="/" className="text-gray-600 hover:underline">Home</Link>
              <FaChevronRight className=" text-gray-600" size={"0.9vw"} />
              <Link href="" className="text-gray-600 hover:underline">Contact</Link>
            </div>
          </div>
        </div>

        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 w-full h-14 bg-[#F6F7F9]"
          )}
          style={{ clipPath: `polygon(100% 0%, 0% 100%, 100% 100%)` }}
        ></div>
      </div>

      <div className="p-10 mt-[7%] flex gap-[8%] ">
        <div className="flex gap-7">
          <Image
            className="w-[23vw] translate-y-[18%] h-[40vh] object-cover shrink-0 rounded-lg"
            src="/images/contact_us_we_are_here_for_you.webp"
            alt="Services Image"
            width={500}
            height={500}
          />
          <div className="flex flex-col">
            <div className="w-[15vw] h-[25vh] bg-blue-100 flex items-center justify-center flex-col rounded-lg">
              <h1 className="font-bold text-4xl text-gray-600">5000+</h1>
              <h1 className="mt-1 text-xl text-gray-600">
                Satisfied Customers
              </h1>
            </div>
            <div className="mt-7">
              <Image
                className="w-[26vw] h-[30vh] object-cover shrink-0 rounded-lg"
                src="/images/our_team.webp"
                alt="Services"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>

        <div>
        <h1 className="font-bold  text-4xl leading-normal tracking-tighter text-primary">
            {t("Convinced")}
          </h1>

          <div className="mt-10 flex gap-3">
            <HiOutlineLocationMarker className="text-blue-500" size={"1.8vw"} />
            <div className="flex flex-col ">
              <h1 className="font-semibold text-xl">Address</h1>
              <h1 className="text-gray-600 mt-1">B7 1st Floor,Sector II,</h1>
              <h1 className="text-gray-600">Gautam Buddha Nagar,</h1>
              <h1 className="text-gray-600">Noida 201301,</h1>
              <h1 className="text-gray-600">India</h1>
            </div>
          </div>
          <div className="mt-6 flex gap-3">
            <LuPhoneCall className="text-blue-500" size={"1.8vw"} />
            <div className="flex flex-col ">
              <h1 className="font-semibold text-xl">Phone</h1>
              <h1 className="text-gray-600 mt-1">+918130600627</h1>
              <h1 className="text-gray-600">+918130600628</h1>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <MdOutlineMailOutline className="text-blue-500" size={"1.8vw"} />
            <div className="flex flex-col ">
              <h1 className="font-semibold text-xl">E-mail</h1>
              <h1 className="text-gray-600">admin@caremedico.com</h1>
            </div>
          </div>
        </div>
      </div>

      {/* 3rd part start from here */}
      <div>
        <div className="flex justify-center mt-10 px-8 flex-col items-center">
          <h1 className="text-4xl text-primary font-semibold">
            {t("Drop")}
          </h1>
          <h1 className="mt-5 text-xl text-gray-600 mx-20">
            {t("Reach_Out")}
          </h1>

          <div className="w-[80vw] mt-5 mb-[6%] mx-auto p-6 border-none  sm:max-w-lg lg:max-w-2xl">
            <LeadGenerationForm />
          </div>
        </div>
      </div>
    </>
  );
}
