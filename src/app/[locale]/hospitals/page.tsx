"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";

import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div className="w-full">
        <div className="mt-[5.1%]">
          {/* 1st */}
          <Card className="w-full max-w-6xl	 container mx-auto p-3">
            <CardContent>
              <div className="flex gap-[10%]">
                <div className="flex gap-4">
                  <Image
                    className="max-w-48	 mt-3  shrink-0 object-cover rounded-lg"
                    src="/images/bremen-ost_clinic_bremen-min.jpg"
                    alt=""
                    width={800}
                    height={300}
                  />
                  <div className="flex flex-col">
                    <h1 className="text-2xl font-semibold mt-3">
                      Academic Hospital Bogenhausen, Germany
                    </h1>

                    <h1 className="text-gray-600">rating: 4.7</h1>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex flex-col mt-3 translate-x-[15%]">
                    <div className="flex gap-1">
                      <Icon
                        provider="lucide"
                        name="Bed"
                        className="text-gray-600"
                      />
                      {/* <Bed size={"1.5vw"} className="text-gray-600" /> */}
                      <h1 className="text-gray-600">Number of Beds: 1000</h1>
                    </div>
                    <div className="flex gap-1 mt-1">
                      <Icon
                        provider="lucide"
                        name="GraduationCap"
                        className="text-gray-600"
                      />
                      <h1 className="text-gray-600">Multi Specialty</h1>
                    </div>
                    <div className="flex gap-1 items-center mt-1">
                      <Icon
                        provider="lucide"
                        name="Flag"
                        className="text-gray-600"
                      />
                      <h1 className="flex gap-1  mt-1 text-gray-600">
                        Country: Germany
                      </h1>
                    </div>
                    <div className="mt-2 ">
                      <Button variant="default" className="w-full">
                        Book Appointment
                      </Button>
                      <Button variant="default" className="w-full mt-1">
                        Whatsapp
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            {/* <h1 className="w-[48vw] mt-4">
            
          </h1> */}
            <CardFooter className="mt-4">
              <h1 className="font-semibold text-gray-600">
                Academic Hospital Bogenhausen is an academic teaching hospital
                for the University of Munich. It specializes in lung diseases,
                especially heart diseases, hormonal disorders, respiratory
                diseases, lung diseases, lung cancer and more. The facility
                receives more than 36,000 clinical cases in a year.
              </h1>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
};

export default page;
