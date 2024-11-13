"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  
  CardFooter,
  
} from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";

import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div className="w-full h-screen">
        <div className="h-[50vh] mt-[5.1%]">
          {/* 1st */}
          <Card className="border  w-[55vw] mx-auto p-3">
            <div className="flex gap-4">
              <Image
                className="w-[12vw] mt-3 h-[15vh] shrink-0 object-cover rounded-lg"
                src="/images/bremen-ost_clinic_bremen-min.jpg"
                alt="" width={500}
                height={300}
              />
              <div className="flex gap-3 ">
                <div className="flex flex-col">
                  <h1 className="text-2xl font-semibold mt-3">
                    Academic Hospital Bogenhausen, Germany
                  </h1>

                  <h1 className="text-gray-600">rating: 4.7</h1>
                </div>
                <div className="flex flex-col mt-3 translate-x-[15%]">
                  <div className="flex gap-1 translate-y-[6%]">
                    <Icon
                      provider="lucide"
                      name="Bed"
                      className="text-gray-600"
                    />
                    {/* <Bed size={"1.5vw"} className="text-gray-600" /> */}
                    <h1 className="text-gray-600">Number of Beds: 1000</h1>
                  </div>
                  <div className="flex gap-1 translate-y-[6%] mt-1">
                    <Icon
                      provider="lucide"
                      name="GraduationCap"
                      className="text-gray-600"
                    />
                    <h1 className="text-gray-600">Multi Specialty</h1>
                  </div>
                  <div className="flex gap-1 items-center translate-y-[6%] mt-1">
                    <Icon
                      provider="lucide"
                      name="Flag"
                      className="text-gray-600"
                    />
                    <h1 className="flex gap-1 translate-y-[6%] mt-1 text-gray-600">
                      Country: Germany
                    </h1>
                  </div>
                  <div className="mt-4">
                    <Button className="w-[15vw]" variant="default">
                      Book Appointment
                    </Button>
                    <Button className="w-[15vw] mt-1" variant="default">
                      Whatsapp
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            {/* <h1 className="w-[48vw] mt-4">
            
          </h1> */}
            <CardFooter className="w-[45vw] mt-4">
              <h1>
                Academic Hospital Bogenhausen is an academic teaching hospital
                for the University of Munich. It specializes in lung diseases,
                especially heart diseases, hormonal disorders, respiratory
                diseases, lung diseases, lung cancer and more. The facility
                receives more than 36,000 clinical cases in a year.
              </h1>
            </CardFooter>
          </Card>
          {/* 2nd */}

          <Card className=" mt-10 border  w-[55vw] mx-auto p-3">
            <div className="flex gap-4">
              <Image
                className="w-[12vw] mt-3 h-[15vh] shrink-0 object-cover rounded-lg"
                src="/images/Asklepios Hospital Barmbek.jpeg"
                alt="" width={500}
                height={300}
              />
              <div className="flex gap-3 ">
                <div className="flex flex-col">
                  <h1
                    style={{ whiteSpace: "nowrap" }}
                    className="text-2xl font-semibold mt-3"
                  >
                    Asklepios Hospital Barmbek
                  </h1>

                  <h1 className="text-gray-600">rating: 3.6</h1>
                </div>
                <div className="flex flex-col mt-3 translate-x-[10%]">
                  <div className="flex gap-1 translate-y-[6%]">
                    <Icon
                      provider="lucide"
                      name="Bed"
                      className="text-gray-600"
                    />
                    {/* <Bed size={"1.5vw"} className="text-gray-600" /> */}
                    <h1 className="text-gray-600">Number of Beds: 620</h1>
                  </div>
                  <div className="flex gap-1 translate-y-[6%] mt-1">
                    <Icon
                      provider="lucide"
                      name="GraduationCap"
                      className="text-gray-600"
                    />
                    <h1 className="text-gray-600">Multi Specialty</h1>
                  </div>
                  <div className="flex gap-1 items-center translate-y-[6%] mt-1">
                    <Icon
                      provider="lucide"
                      name="Flag"
                      className="text-gray-600"
                    />
                    <h1 className="flex gap-1 translate-y-[6%] mt-1 text-gray-600">
                      Country: Germany
                    </h1>
                  </div>
                  <div className="mt-4">
                    <Button className="w-[15vw]" variant="default">
                      Book Appointment
                    </Button>
                    <Button className="w-[15vw] mt-1" variant="default">
                      Whatsapp
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            {/* <h1 className="w-[48vw] mt-4">
            
          </h1> */}
            <CardFooter className="w-[45vw] mt-4">
              <h1>
                Founded in 2005, Asklepios Hospital Barmbek is a part of the
                Asklepios medical group, a major network of private clinics in
                Germany. The hospital is known for its state-of-the-art medical
                standards and specializes in various medical fields,
                particularly treatment for liver diseases and advanced quality
                medical tourism services.
              </h1>
            </CardFooter>
          </Card>
          {/* 3rd */}

          <Card className=" mt-10 border  w-[55vw] mx-auto p-3">
            <div className="flex gap-4">
              <Image
                className="w-[12vw] mt-3 h-[15vh] shrink-0 object-cover rounded-lg"
                src="/images/asklepios_academic_city_hospital_bad_wildungen-min.jpg"
                alt="" width={500}
                height={300}
              />
              <div className="flex gap-3 ">
                <div className="flex flex-col">
                  <h1 className="text-2xl font-semibold mt-3">
                    Asklepios Academic City Hospital, Bad Wildungen
                  </h1>

                  <h1 className="text-gray-600">rating: 4.4</h1>
                </div>
                <div className="flex flex-col mt-3 translate-x-[10%]">
                  <div className="flex gap-1 translate-y-[6%]">
                    <Icon
                      provider="lucide"
                      name="Bed"
                      className="text-gray-600"
                    />
                    {/* <Bed size={"1.5vw"} className="text-gray-600" /> */}
                    <h1 className="text-gray-600">Number of Beds: 210</h1>
                  </div>
                  <div className="flex gap-1 translate-y-[6%] mt-1">
                    <Icon
                      provider="lucide"
                      name="GraduationCap"
                      className="text-gray-600"
                    />
                    <h1 className="text-gray-600">Multi Specialty</h1>
                  </div>
                  <div className="flex gap-1 items-center translate-y-[6%] mt-1">
                    <Icon
                      provider="lucide"
                      name="Flag"
                      className="text-gray-600"
                    />
                    <h1 className="flex gap-1 translate-y-[6%] mt-1 text-gray-600">
                      Country: Germany
                    </h1>
                  </div>
                  <div className="mt-4">
                    <Button className="w-[15vw]" variant="default">
                      Book Appointment
                    </Button>
                    <Button className="w-[15vw] mt-1" variant="default">
                      Whatsapp
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            {/* <h1 className="w-[48vw] mt-4">
            
          </h1> */}
            <CardFooter className="w-[45vw] mt-4">
              <h1>
                Asklepios Academic City Hospital is an academic teaching
                hospital located in Northern Hesse, Germany. It is affiliated
                with the Phillip University of Magburg and is a member of
                Asklepios Clinics GmbH. Known for its advanced medical
                procedures and state-of-the-art equipment, the hospital has a
                strong reputation both in Germany and internationally. It
                features high-tech operating rooms, is set in a lush green area,
                and is designed to accommodate 210 inpatients while offering
                high-quality medical care.
              </h1>
            </CardFooter>
          </Card>

          {/* 4th */}
          <Card className=" mt-10 border  w-[55vw] mx-auto p-3">
            <div className="flex gap-4">
              <Image
                className="w-[12vw] mt-3 h-[15vh] shrink-0 object-cover rounded-lg"
                src="/images/1-min_13.jpg"
                alt="" width={500}
                height={300}
              />
              <div className="flex gap-3 ">
                <div className="flex flex-col">
                  <h1
                    style={{ whiteSpace: "nowrap" }}
                    className="text-2xl font-semibold mt-3"
                  >
                    Alfried Krupp Hospital, Essen
                  </h1>

                  <h1 className="text-gray-600">rating: 4.7</h1>
                </div>
                <div className="flex flex-col mt-3 translate-x-[8%]">
                  <div className="flex gap-1 translate-y-[6%]">
                    <Icon
                      provider="lucide"
                      name="Bed"
                      className="text-gray-600"
                    />
                    {/* <Bed size={"1.5vw"} className="text-gray-600" /> */}
                    <h1 className="text-gray-600">Number of Beds: 573</h1>
                  </div>
                  <div className="flex gap-1 translate-y-[6%] mt-1">
                    <Icon
                      provider="lucide"
                      name="GraduationCap"
                      className="text-gray-600"
                    />
                    <h1 className="text-gray-600">Multi Specialty</h1>
                  </div>
                  <div className="flex gap-1 items-center translate-y-[6%] mt-1">
                    <Icon
                      provider="lucide"
                      name="Flag"
                      className="text-gray-600"
                    />
                    <h1 className="flex gap-1 translate-y-[6%] mt-1 text-gray-600">
                      Country: Germany
                    </h1>
                  </div>
                  <div className="mt-4">
                    <Button className="w-[15vw]" variant="default">
                      Book Appointment
                    </Button>
                    <Button className="w-[15vw] mt-1" variant="default">
                      Whatsapp
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            {/* <h1 className="w-[48vw] mt-4">
            
          </h1> */}
            <CardFooter className="w-[45vw] mt-4">
              <h1>
                The Alfried Krupp Hospital is an extensive medical center based
                in Essen, Germany, founded in the year 1872. With a capacity of
                573 beds, approximately 28,067 medical cases are treated in
                specialized departments every year. The hospital features
                state-of-the-art medical technology and an experienced staff,
                ensuring high-quality services and care.
              </h1>
            </CardFooter>
          </Card>
          {/* 5th */}

          <Card className=" mt-10 border  w-[55vw] mx-auto p-3">
            <div className="flex gap-4">
              <Image
                className="w-[12vw] mt-3 h-[15vh] shrink-0 object-cover rounded-lg"
                src="/images/asklepios_st._georg_hospital_building-min.jpg"
                alt="" width={500}
                height={300}
              />
              <div className="flex gap-3 ">
                <div className="flex flex-col">
                  <h1
                    style={{ whiteSpace: "nowrap" }}
                    className="text-2xl font-semibold mt-3"
                  >
                    Asklepios St. Georg Hospital
                  </h1>

                  <h1 className="text-gray-600">rating: 4.3</h1>
                </div>
                <div className="flex flex-col mt-3 translate-x-[10%]">
                  <div className="flex gap-1 translate-y-[6%]">
                    <Icon
                      provider="lucide"
                      name="Bed"
                      className="text-gray-600"
                    />
                    {/* <Bed size={"1.5vw"} className="text-gray-600" /> */}
                    <h1 className="text-gray-600">Number of Beds: 732</h1>
                  </div>
                  <div className="flex gap-1 translate-y-[6%] mt-1">
                    <Icon
                      provider="lucide"
                      name="GraduationCap"
                      className="text-gray-600"
                    />
                    <h1 className="text-gray-600">Multi Specialty</h1>
                  </div>
                  <div className="flex gap-1 items-center translate-y-[6%] mt-1">
                    <Icon
                      provider="lucide"
                      name="Flag"
                      className="text-gray-600"
                    />
                    <h1 className="flex gap-1 translate-y-[6%] mt-1 text-gray-600">
                      Country: Germany
                    </h1>
                  </div>
                  <div className="mt-4">
                    <Button className="w-[15vw]" variant="default">
                      Book Appointment
                    </Button>
                    <Button className="w-[15vw] mt-1" variant="default">
                      Whatsapp
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            {/* <h1 className="w-[48vw] mt-4">
            
          </h1> */}
            <CardFooter className="w-[45vw] mt-4">
              <h1>
                Asklepios St. Georg Hospital is a multispeciality center located
                in Hamburg and is a part of the Asklepios Medical Group. The
                group which houses a network of 150 medical establishments in 14
                federal districts in Germany making it one of the largest
                private hospital groups in the country. The hospital is
                certified by the International Organization for Standardization,
                Switzerland, and the Center for Transcatheter Aortic Valve
                Implantation, Germany. Asklepios St. Georg treats about half of
                all hospital patients in Hamburg annually and covers a wide
                range of medical specialties.
              </h1>
            </CardFooter>
          </Card>

          {/* 6th */}
          <Card className=" mt-10 border  w-[55vw] mx-auto p-3">
            <div className="flex gap-4">
              <Image
                className="w-[12vw] mt-3 h-[15vh] shrink-0 object-cover rounded-lg"
                src="/images/bremen-ost_clinic_bremen-min.jpg"
                alt="" width={500}
                height={300}
              />
              <div className="flex gap-3">
                <div className="flex flex-col">
                  <h1
                    style={{ whiteSpace: "nowrap" }}
                    className="text-2xl font-semibold mt-3"
                  >
                    Bremen Ost Clinic
                  </h1>

                  <h1 className="text-gray-600">rating: 5</h1>
                </div>
                <div className="flex flex-col mt-3 translate-x-[35%] ">
                  <div className="flex gap-1 translate-y-[6%]">
                    <Icon
                      provider="lucide"
                      name="Bed"
                      className="text-gray-600"
                    />
                    {/* <Bed size={"1.5vw"} className="text-gray-600" /> */}
                    <h1 className="text-gray-600">Number of Beds: 905</h1>
                  </div>
                  <div className="flex gap-1 translate-y-[6%] mt-1">
                    <Icon
                      provider="lucide"
                      name="GraduationCap"
                      className="text-gray-600"
                    />
                    <h1 className="text-gray-600">Multi Specialty</h1>
                  </div>
                  <div className="flex gap-1 items-center translate-y-[6%] mt-1">
                    <Icon
                      provider="lucide"
                      name="Flag"
                      className="text-gray-600"
                    />
                    <h1 className="flex gap-1 translate-y-[6%] mt-1 text-gray-600">
                      Country: Germany
                    </h1>
                  </div>
                  <div className="mt-4">
                    <Button className="w-[15vw]" variant="default">
                      Book Appointment
                    </Button>
                    <Button className="w-[15vw] mt-1" variant="default">
                      Whatsapp
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            {/* <h1 className="w-[48vw] mt-4">
            
          </h1> */}
            <CardFooter className="w-[45vw] mt-4">
              <h1>
                Located in the Osterholz district of Bremen, Bremen-Ost Clinic
                is a multi-specialty hospital and belongs to Bremer
                Klinikverbund Gesundheit Nord gGmbH. Established in 1901, the
                group has three more clinics under its umbrella, including
                Bremen-Nord, Bremen-Mitte and Links der Weser. The clinic
                provides high-quality services, certified according to the KTQ
                procedure since 2008. It caters to over 19,000 patients
                annually.
              </h1>
            </CardFooter>
          </Card>

          {/* 7th */}
          <Card className=" mt-10 border  w-[55vw] mx-auto p-3">
            <div className="flex gap-4">
              <Image
                className="w-[12vw] mt-3 h-[15vh] shrink-0 object-cover rounded-lg"
                src="/images/1-min_16.jpg"
                alt="" width={500}
                height={300}
              />
              <div className="flex gap-3">
                <div className="flex flex-col">
                  <h1
                    style={{ whiteSpace: "nowrap" }}
                    className="text-2xl font-semibold mt-3"
                  >
                    Freiburg University Hospital
                  </h1>

                  <h1 className="text-gray-600">rating: 4.6</h1>
                </div>
                <div className="flex flex-col translate-x-[12%] mt-3 ">
                  <div className="flex gap-1 translate-y-[6%]">
                    <Icon
                      provider="lucide"
                      name="Bed"
                      className="text-gray-600"
                    />
                    {/* <Bed size={"1.5vw"} className="text-gray-600" /> */}
                    <h1 className="text-gray-600">Number of Beds: 1600</h1>
                  </div>
                  <div className="flex gap-1 translate-y-[6%] mt-1">
                    <Icon
                      provider="lucide"
                      name="GraduationCap"
                      className="text-gray-600"
                    />
                    <h1 className="text-gray-600">Multi Specialty</h1>
                  </div>
                  <div className="flex gap-1 items-center translate-y-[6%] mt-1">
                    <Icon
                      provider="lucide"
                      name="Flag"
                      className="text-gray-600"
                    />
                    <h1 className="flex gap-1 translate-y-[6%] mt-1 text-gray-600">
                      Country: Germany
                    </h1>
                  </div>
                  <div className="mt-4">
                    <Button className="w-[15vw]" variant="default">
                      Book Appointment
                    </Button>
                    <Button className="w-[15vw] mt-1" variant="default">
                      Whatsapp
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            {/* <h1 className="w-[48vw] mt-4">
            
          </h1> */}
            <CardFooter className="w-[45vw] mt-4">
              <h1>
                The University Medical Center Freiburg in Germany is a part of
                the medical research unit of the University of Freiburg and is
                one of the largest hospitals in Europe. Established in 1457, it
                has over 555 years of history. It is the largest employer in the
                region with a staff of more than 12,500 people including nearly
                1,450 doctors. The hospital is renowned for pioneering surgeries
                and maintains a high standard of care across various medical
                specialties.
              </h1>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
};

export default page;
