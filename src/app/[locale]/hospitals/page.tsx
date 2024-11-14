"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { hospitaldeatils } from "@/hospital_detailsdata";

import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div className="container mx-auto">
        {hospitaldeatils.map((hospital,index)=>(
          <Card key={index} className="w-full max-w-6xl	container mx-auto mt-4 p-3">
          <CardContent>
            <div className="flex gap-[10%] justify-evenly">
              <div className="flex gap-4">
                <Image
                  className="max-w-48	 mt-3  shrink-0 object-cover rounded-lg"
                  src={hospital.hospitalImages[0]}
                  alt={hospital.name}
                  width={800}
                  height={300}
                />
                <div className="flex flex-col">
                  <h1 className="text-2xl font-semibold mt-3">
                    {hospital.name}
                  </h1>

                  <h1 className="text-gray-600">Rating: {hospital.rating}</h1>
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
                    <h1 className="text-gray-600">Number of Beds: {hospital.numberOfBeds}</h1>
                  </div>
                  <div className="flex gap-1 mt-1">
                    <Icon
                      provider="lucide"
                      name="GraduationCap"
                      className="text-gray-600"
                    />
                    <h1 className="text-gray-600">{hospital.specialty}</h1>
                  </div>
                  <div className="flex gap-1 items-center mt-1">
                    <Icon
                      provider="lucide"
                      name="Flag"
                      className="text-gray-600"
                    />
                    <h1 className="flex gap-1  mt-1 text-gray-600">
                      Country: {hospital.address.country}
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
            {hospital.about}
            </h1>
          </CardFooter>
        </Card>
        ))}
      </div>
    </>
  );
};

export default page;
