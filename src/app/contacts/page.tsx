"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
// import { PhoneInput } from "@/components/ui/phoneInput"
import { Link } from "lucide-react";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { PhoneInput } from "@/components/ui/phone-input";
// (props) ye tha important h
export default function Contacts() {
  return (
    <>
      <div className="relative bg-blue-100 h-[50vh] py-20 mt-[5.1%]">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-semibold text-gray-800">Get in Touch</h1>
          <div className="flex justify-center mt-5 gap-x-5">
            <h1 className="text-gray-600">Home</h1>
            <FaChevronRight
              className="translate-y-[40%] text-gray-600"
              size={"0.9vw"}
            />
            <h1 className="text-gray-600">Contact</h1>
          </div>
        </div>
      </div>

      <div className="p-10 mt-[7%] flex gap-[8%] ">
        <div className="flex gap-7">
          <img
            className="w-[23vw] translate-y-[18%] h-[40vh] object-cover shrink-0 rounded-lg"
            src="https://caremedico.com/wp-content/uploads/2022/09/services_img_hs5.jpg"
            alt=""
          />
          <div className="flex flex-col">
            <div className="w-[15vw] h-[25vh] bg-blue-100 flex items-center justify-center flex-col rounded-lg">
              <h1 className="font-bold text-4xl text-gray-600">5000+</h1>
              <h1 className="mt-1 text-xl text-gray-600">Satisfied Customers</h1>
            </div>
            <div className="mt-7">
              <img
                className="w-[26vw] h-[30vh] object-cover shrink-0 rounded-lg"
                src="https://caremedico.com/wp-content/uploads/2022/09/services_img_hs6.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div>
          <h1 className="font-bold  text-4xl text-pink-500">
            Convinced yet? Let's make{" "}
          </h1>
          <h1 className="font-bold  text-4xl text-pink-500 mt-2">
            something great together.
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
        <div className="flex justify-center mt-10 flex-col items-center">
          <h1 className="text-4xl text-pink-500 font-semibold">
            Drop Us a Line
          </h1>
          <h1 className="mt-5 text-xl text-gray-600">
            Reach out to us for any healthcare related queries and we will get
            back to you shortly.
          </h1>

          <div className="w-[80vw] mt-5 mb-[6%] mx-auto p-6 border-none  sm:max-w-lg lg:max-w-2xl">
            <form className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:space-x-4">
                <div className="flex-1">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="E.g. John Doe"
                    required
                  />
                </div>
                <div className="flex-1 mt-4 sm:mt-0">
                  <Label htmlFor="location">Preferred Treatment Location</Label>
                  <Input id="location" type="text" placeholder="Bengaluru" />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:space-x-4">
                <div className="flex-1">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="E.g. john@doe.com"
                    required
                  />
                </div>
                <div className="flex-1 mt-4 sm:mt-0">
                  <Label htmlFor="phone">Phone *</Label>
                  <PhoneInput
                    id="phone"
                    defaultCountry="IN"
                    className="w-full"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="medicalIssue">Medical Issue</Label>
                <Textarea
                  id="medicalIssue"
                  placeholder="Medical Issue"
                  className="h-32 bg-gray-200"
                />
              </div>

              <div>
                <Label htmlFor="reports">Reports</Label>
                <div className="flex items-center justify-center border-transparent rounded-md bg-gray-200 h-28 p-4 text-gray-500">
                  <span className="mr-2">Drag and Drop (or)</span>
                  <a href="#" className="text-sky-400 hover:underline">
                    Choose Files
                  </a>
                </div>
              </div>

              <Button
                type="submit"
                className="w-40 bg-rose-600 hover:bg-rose-700 text-white"
              >
                Consult Now for Free
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
