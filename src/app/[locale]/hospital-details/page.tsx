"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Icon } from "@/components/ui/icon";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { hospitaldeatils } from "@/hospital_detailsdata";

const page = () => {
  
  return (
    <>
    {hospitaldeatils.map((hospital,index)=>(
      <Card key={index} className="container mx-auto">
      <div className="">
        <div className="flex p-[3%] justify-evenly ">
          <div className="">
            <div className="flex gap-1 items-center">
              <Icon
                provider="lucide"
                name="Star"
                className="text-yellow-500"
                size={"1vw"}
              />
              <h1 className="text-red-500">
                You are viewing our top rated Hospital
              </h1>
            </div>
            <h1 className="text-3xl font-semibold mt-2">
              {hospital.name}
            </h1>
            <div className="flex items-center gap-1 mt-3">
              {/* star hai */}

              <div className="flex">
                <Icon
                  provider="lucide"
                  name="Star"
                  size={"1vw"}
                  className="text-yellow-500"
                />
                <Icon
                  provider="lucide"
                  name="Star"
                  size={"1vw"}
                  className="text-yellow-500"
                />
                <Icon
                  provider="lucide"
                  name="Star"
                  size={"1vw"}
                  className="text-yellow-500"
                />
                <Icon
                  provider="lucide"
                  name="Star"
                  size={"1vw"}
                  className="text-yellow-500"
                />
                <Icon
                  provider="lucide"
                  name="Star"
                  size={"1vw"}
                  className="text-yellow-500"
                />
              </div>
              <div className="text-base ">{hospital.rating}(Rating)</div>
            </div>
            <div className="flex gap-4">
              <div className="mt-2 flex gap-1 items-center">
                {/*  */}
                <Icon
                  provider="lucide"
                  name="MapPinMinusInside"
                  size={"1.2vw"}
                  className=""
                />
                <h1>{hospital.location}</h1>
              </div>
              <div className="mt-2 flex gap-1 items-center">
                {/*  */}
                <Icon
                  provider="lucide"
                  name="Bed"
                  size={"1.2vw"}
                  className=""
                />
                <h1>Number of Beds: {hospital.numberOfBeds}</h1>
              </div>

              <div className="mt-2 flex gap-1 items-center">
                {/*  */}
                <Icon
                  provider="phosphor"
                  name="Building"
                  size={"1.2vw"}
                  className=""
                />
                <h1>Establish In: {hospital.establishedIn}</h1>
              </div>
              <div className="mt-2 flex gap-1 items-center">
                {/*  */}
                <Icon
                  provider="lucide"
                  name="ShieldCheck"
                  size={"1.2vw"}
                  className=""
                />
                <h1>Accreditations:{hospital.accreditations}</h1>
              </div>
            </div>
          </div>

          <div className="px-4 translate-y-[40%] flex border gap-2 h-[10vh] w-fit p-2 bg-blue-50 rounded-lg  border-blue-400">
            <div>
              <div className="flex gap-2">
                <Icon provider="lucide" name="ThumbsUp" />
                <h1 className="font-semibold text-xl">95% patients</h1>
              </div>
              <h1>recommended this hospital</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Image tag hai yaha  */}

      <div className="mt-2 mb-10 mx-auto w-[70%] ">
        <Carousel>
          <CarouselContent>
            <CarouselItem className="basis-1/3 rounded-lg">
              <Image
                className="rounded-md"
                src={hospital.hospitalImages[0]}
                alt=""
                width={500}
                height={300}
              />
            </CarouselItem>
            <CarouselItem className="basis-1/3 rounded-lg">
              <Image
                className="rounded-md"
                src={hospital.hospitalImages[1]}
                alt=""
                width={500}
                height={300}
              />
            </CarouselItem>
            <CarouselItem className="basis-1/3 rounded-lg">
              <Image
                className="rounded-md"
                src={hospital.hospitalImages[2]}
                alt=""
                width={500}
                height={300}
              />
            </CarouselItem>
            <CarouselItem className="basis-1/3 rounded-lg">
              <Image
                className="rounded-md"
                src={hospital.hospitalImages[3]}
                alt=""
                width={500}
                height={300}
              />
            </CarouselItem>
            <CarouselItem className="basis-1/3 rounded-lg">
              <Image
                className="rounded-md"
                src={hospital.hospitalImages[4]}
                alt=""
                width={500}
                height={300}
              />
            </CarouselItem>
            <CarouselItem className="basis-1/3 rounded-lg">
              <Image
                className="rounded-md"
                src={hospital.hospitalImages[5]}
                alt=""
                width={500}
                height={300}
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <Button variant="destructive" size="default">
          Book Appointment
        </Button>
        <Button className="w-[10%]" variant="default" size="default">
          <div className="flex items-center gap-2">
            Whatsapp
            <Icon provider="phosphor" name="WhatsappLogo" />
          </div>
        </Button>
      </div>

      <Card className="mt-3 w-[60%] mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl flex justify-center text-gray-600 ">
            <h1>Team and Specialities</h1>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardContent className="px-6 flex gap-3">
            <Icon
              provider="lucide"
              name="CircleCheck"
              size={"5vw"}
              className="text-green-400 translate-y-[-26%]"
            />
            <p className="text-base">
              Apollo, Bangalore, is the leading healthcare facility with 60
              departments and Centers of Excellence in areas such as Heart,
              Neuro, Robotics, ENT, Ortho, Nephrology, Pediatrics,
              Dermatology, Cancer Care, Spine, Plastic Surgery, Vascular
              Surgery, Gastroenterology, Colorectal Surgery, Critical Care,
              Andrology, Liver Sciences, Emergency, Preventive Health, Sports
              Medicine, Transplants, Bariatric Surgery, Pulmonology, and
              Nuclear Medicine.
            </p>
          </CardContent>

          <CardContent className="px-6 flex gap-3">
            <Icon
              provider="lucide"
              name="CircleCheck"
              size={"2.6vw"}
              className="text-green-400 translate-y-[-22%]"
            />
            <p>
              Doctors and staff perform a wide range of services daily,
              including CT scans, MRIs, Cardiac Surgeries, Dialysis
              procedures, and organ transplants, showcasing their commitment
              to comprehensive healthcare.
            </p>
          </CardContent>
          <CardContent className="px-6 flex gap-3">
            <Icon
              provider="lucide"
              name="CircleCheck"
              size={"1.4vw"}
              className="text-green-400 translate-y-[-23%]"
            />
            <p className="text-base">
              Their Neuro team treats over 300 types of neurological issues,
              including epilepsy, stroke, and dementia.
            </p>
          </CardContent>

          <CardContent className="px-6 flex gap-3">
            <Icon
              provider="lucide"
              name="CircleCheck"
              size={"1.4vw"}
              className="text-green-400 translate-y-[-20%]"
            />
            <p className="text-base">
              Nephrology is a key focus area, with over 10,000 patients
              treated annually for kidney problems.
            </p>
          </CardContent>

          <CardContent className="px-6 flex gap-3">
            <Icon
              provider="lucide"
              name="CircleCheck"
              size={"1.7vw"}
              className="text-green-400 translate-y-[-20%]"
            />
            <p className="text-base">
              The hospital offers computer-assisted total knee replacement, a
              rare service.
            </p>
          </CardContent>

          <CardContent className="px-6 flex gap-3">
            <Icon
              provider="lucide"
              name="CircleCheck"
              size={"1.7vw"}
              className="text-green-400 translate-y-[-20%]"
            />
            <p className="text-base">
              It specialises in minimally invasive, robotics, and laparoscopy
              surgeries.
            </p>
          </CardContent>
        </CardContent>
      </Card>

      <div className="">
        <Card className="mt-3 mx-auto md:w-3/4 lg:w-2/3 xl:w-[60%]">
          <CardHeader>
            <CardTitle className="text-3xl flex justify-center text-gray-600">
              <h1>Facilities</h1>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center">
            <div>
              <div className="flex flex-col">
                <div className="px-6 flex items-center gap-3">
                  <Icon
                    provider="lucide"
                    name="CircleCheck"
                    size={"1.5vw"}
                    className="text-green-400 translate-y-[-20%]"
                  />
                  <h1>Private rooms</h1>
                </div>
                <div className="px-6 flex mt-3 items-center gap-3">
                  <Icon
                    provider="lucide"
                    name="CircleCheck"
                    size={"1.5vw"}
                    className="text-green-400 translate-y-[-20%]"
                  />
                  <h1>Free Wifi</h1>
                </div>

                <div className="px-6 flex mt-3 items-center gap-3">
                  <Icon
                    provider="lucide"
                    name="CircleCheck"
                    size={"1.5vw"}
                    className="text-green-400 translate-y-[-20%]"
                  />
                  <h1>Phone in Room</h1>
                </div>
                <div className="px-6 flex mt-3 items-center gap-3">
                  <Icon
                    provider="lucide"
                    name="CircleCheck"
                    size={"1.5vw"}
                    className="text-green-400 translate-y-[-20%]"
                  />
                  <h1>Mobility accessible rooms</h1>
                </div>
                <div className="px-6 flex mt-3 items-center gap-3">
                  <Icon
                    provider="lucide"
                    name="CircleCheck"
                    size={"1.5vw"}
                    className="text-green-400 translate-y-[-20%]"
                  />
                  <h1>Family accommodation</h1>
                </div>

                <div className="px-6 flex mt-3 items-center gap-3">
                  <Icon
                    provider="lucide"
                    name="CircleCheck"
                    size={"1.5vw"}
                    className="text-green-400 translate-y-[-20%]"
                  />
                  <h1>Laundry</h1>
                </div>
                <div className="px-6 flex mt-3 items-center gap-3">
                  <Icon
                    provider="lucide"
                    name="CircleCheck"
                    size={"1.5vw"}
                    className="text-green-400 translate-y-[-20%]"
                  />
                  <h1>Safe in the room</h1>
                </div>
              </div>
            </div>

            <div>
              <div className="px-6 flex mt-3 items-center gap-3">
                <Icon
                  provider="lucide"
                  name="CircleCheck"
                  size={"1.5vw"}
                  className="text-green-400 translate-y-[-20%]"
                />
                <h1>Cafe</h1>
              </div>
              <div className="px-6 flex mt-3 items-center gap-3">
                <Icon
                  provider="lucide"
                  name="CircleCheck"
                  size={"1.5vw"}
                  className="text-green-400 translate-y-[-20%]"
                />
                <h1>24-hour pharmacy</h1>
              </div>
              <div className="px-6 flex mt-3 items-center gap-3">
                <Icon
                  provider="lucide"
                  name="CircleCheck"
                  size={"1.5vw"}
                  className="text-green-400 translate-y-[-20%]"
                />
                <h1>Emergency room</h1>
              </div>
              <div className="px-6 flex mt-3 items-center gap-3">
                <Icon
                  provider="lucide"
                  name="CircleCheck"
                  size={"1.5vw"}
                  className="text-green-400 translate-y-[-20%]"
                />
                <h1>Car Hire</h1>
              </div>
              <div className="px-6 flex mt-3 items-center gap-3">
                <Icon
                  provider="lucide"
                  name="CircleCheck"
                  size={"1.5vw"}
                  className="text-green-400 translate-y-[-20%]"
                />
                <h1>Local tourism options</h1>
              </div>
              <div className="px-6 flex mt-3 items-center gap-3">
                <Icon
                  provider="lucide"
                  name="CircleCheck"
                  size={"1.5vw"}
                  className="text-green-400 translate-y-[-20%]"
                />
                <h1>Visa / Travel office</h1>
              </div>
              <div className="px-6 flex mt-3 items-center gap-3">
                <Icon
                  provider="lucide"
                  name="CircleCheck"
                  size={"1.5vw"}
                  className="text-green-400 translate-y-[-20%]"
                />
                <h1>Shopping trip organisation</h1>
              </div>
            </div>

            <div>
              <div className="px-6 flex mt-3 items-center gap-3">
                <Icon
                  provider="lucide"
                  name="CircleCheck"
                  size={"1.5vw"}
                  className="text-green-400 translate-y-[-20%]"
                />
                <h1>Shopping trip organisation</h1>
              </div>

              <div className="px-6 flex mt-3 items-center gap-3">
                <Icon
                  provider="lucide"
                  name="CircleCheck"
                  size={"1.5vw"}
                  className="text-green-400 translate-y-[-20%]"
                />
                <h1>Private driver / Limousine services</h1>
              </div>

              <div className="px-6 flex mt-3 items-center gap-3">
                <Icon
                  provider="lucide"
                  name="CircleCheck"
                  size={"1.5vw"}
                  className="text-green-400 translate-y-[-20%]"
                />
                <h1>Local transportation booking</h1>
              </div>

              <div className="px-6 flex mt-3 items-center gap-3">
                <Icon
                  provider="lucide"
                  name="CircleCheck"
                  size={"1.5vw"}
                  className="text-green-400 translate-y-[-20%]"
                />
                <h1>Airport pickup</h1>
              </div>

              <div className="px-6 flex mt-3 items-center gap-3">
                <Icon
                  provider="lucide"
                  name="CircleCheck"
                  size={"1.5vw"}
                  className="text-green-400 translate-y-[-20%]"
                />
                <h1>Post operative followup</h1>
              </div>

              <div className="px-6 flex mt-3 items-center gap-3">
                <Icon
                  provider="lucide"
                  name="CircleCheck"
                  size={"1.5vw"}
                  className="text-green-400 translate-y-[-20%]"
                />
                <h1>Document legalisation</h1>
              </div>

              <div className="px-6 flex mt-3 items-center gap-3">
                <Icon
                  provider="lucide"
                  name="CircleCheck"
                  size={"1.5vw"}
                  className="text-green-400 translate-y-[-20%]"
                />
                <h1>Rehabilitation</h1>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <Card className="mt-6 mb-6 w-full md:w-3/4 lg:w-2/3 xl:w-[60%] mx-auto">
          <CardHeader className="text-gray-600">
            <CardTitle className="text-2xl md:text-3xl px-4 flex justify-start">
              <h1 className="translate-y-[20%]">Address</h1>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="px-3 flex justify-start">
              <div className="font-semibold gap-1 flex items-center">
                <Icon
                  provider="lucide"
                  name="MapPin"
                  className="text-gray-700"
                  size="1em"
                />
                <h1 className="text-sm sm:text-base md:text-lg">
                {hospital.address.city} {hospital.address.country} 
                </h1>
              </div>
            </div>
          </CardContent>
          <CardFooter className="translate-y-[-20%] px-8">
            <Link href="/">
              <Button className="flex justify-start">
                <h1>Direction</h1>
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </Card>
    ))}
    </>
  );
};

export default page;
