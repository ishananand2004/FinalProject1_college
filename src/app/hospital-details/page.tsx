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

const page = () => {
  return (
    <>
      <div className="mt-[5.1%]">
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
              Fortis Hospital, Bangalore (Cunningham Road)
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
              <div className="text-base ">5(Rating)</div>
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
                <h1>Bangalore, India</h1>
              </div>
              <div className="mt-2 flex gap-1 items-center">
                {/*  */}
                <Icon
                  provider="lucide"
                  name="Bed"
                  size={"1.2vw"}
                  className=""
                />
                <h1>Number of Beds: 284</h1>
              </div>

              <div className="mt-2 flex gap-1 items-center">
                {/*  */}
                <Icon
                  provider="phosphor"
                  name="Building"
                  size={"1.2vw"}
                  className=""
                />
                <h1>Establish In: 2006</h1>
              </div>
              <div className="mt-2 flex gap-1 items-center">
                {/*  */}
                <Icon
                  provider="lucide"
                  name="ShieldCheck"
                  size={"1.2vw"}
                  className=""
                />
                <h1>Accreditations:NABH, JCI</h1>
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
                src="/images/fortis_hospital_cunningham_road_2-min.jpg"
                alt=""
                width={500}
                height={300}
              />
            </CarouselItem>
            <CarouselItem className="basis-1/3 rounded-lg">
              <Image
                className="rounded-md"
                src="/images/fortis_hospital_cunningham_road_2photo.jpg"
                alt=""
                width={500}
                height={300}
              />
            </CarouselItem>
            <CarouselItem className="basis-1/3 rounded-lg">
              <Image
                className="rounded-md"
                src="/images/fortis_hospital_cunningham_road_3 photo.jpg"
                alt=""
                width={500}
                height={300}
              />
            </CarouselItem>
            <CarouselItem className="basis-1/3 rounded-lg">
              <Image
                className="rounded-md"
                src="/images/fortis_hospital_cunningham_road_4 photo.jpg"
                alt=""
                width={500}
                height={300}
              />
            </CarouselItem>
            <CarouselItem className="basis-1/3 rounded-lg">
              <Image
                className="rounded-md"
                src="/images/fortis_hospital_cunningham_road_6 photo.jpg"
                alt=""
                width={500}
                height={300}
              />
            </CarouselItem>
            <CarouselItem className="basis-1/3 rounded-lg">
              <Image
                className="rounded-md"
                src="/images/fortis_hospital_cunningham_road5 photo.jpg"
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

      {/* <Card className="mt-10 w-[70%] mx-auto">
        <CardHeader className="">
          <CardTitle className="flex justify-center">
            <h1 className="text-2xl text-gray-600 ">Hospital Information</h1>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex justify-between">
          <div>
            <h1 className="font-semibold text-pink-400 text-xl">
              location: "Bangalore, India
            </h1>
            <h1 className="font-semibold text-pink-400 text-xl mt-1">
              Number of Beds: 284
            </h1>
          </div>
          <div>
            <h1 className="font-semibold text-pink-400 text-xl mt-1">
              EstablishedIn": 2006
            </h1>
            <h1 className="font-semibold text-pink-400 text-xl mt-1">
              Accreditations: ["NABH", "JCI"],
            </h1>
          </div>
        </CardContent>
      </Card> */}
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

      {/* yeha react markdown bnaega */}

      {/* <Card className="w-[70%] mt-10 mx-auto ">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-gray-600">
            Book Appointment at Apollo Hospital
          </CardTitle>
        </CardHeader>
        <div className="flex justify-evenly items-center p-3">
          <div className="px-10 bg-pink-200 w-fit  rounded-lg py-4 ">
            <DropdownMenu>
              <DropdownMenuTrigger className="border-none">
                Select Department
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel></DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  Cardiology and Cardiac Surgery
                </DropdownMenuItem>
                <DropdownMenuItem>ENT Surgery</DropdownMenuItem>
                <DropdownMenuItem>Gastroenterology</DropdownMenuItem>
                <DropdownMenuItem>Gynecology</DropdownMenuItem>
                <DropdownMenuItem>Hepatology</DropdownMenuItem>
                <DropdownMenuItem>Oncology and Oncosurgery</DropdownMenuItem>
                <DropdownMenuItem>Orthopedics</DropdownMenuItem>
                <DropdownMenuItem>Pediatric Cardiology</DropdownMenuItem>
                <DropdownMenuItem>
                  Pediatrics and Pediatric Surgery
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="px-10 bg-pink-200 w-fit mx-10 rounded-lg py-4 ">
            <DropdownMenu>
              <DropdownMenuTrigger className="border-none">
                View All Doctors
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel></DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  Cardiology and Cardiac Surgery
                </DropdownMenuItem>
                <DropdownMenuItem>ENT Surgery</DropdownMenuItem>
                <DropdownMenuItem>Gastroenterology</DropdownMenuItem>
                <DropdownMenuItem>Gynecology</DropdownMenuItem>
                <DropdownMenuItem>Hepatology</DropdownMenuItem>
                <DropdownMenuItem>Oncology and Oncosurgery</DropdownMenuItem>
                <DropdownMenuItem>Orthopedics</DropdownMenuItem>
                <DropdownMenuItem>Pediatric Cardiology</DropdownMenuItem>
                <DropdownMenuItem>
                  Pediatrics and Pediatric Surgery
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Button size="lg" className="w-[15%]">
            Search
          </Button>
        </div>
      </Card> */}

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
              Neuro, Robotics, ENT, Ortho, Nephrology, Pediatrics, Dermatology,
              Cancer Care, Spine, Plastic Surgery, Vascular Surgery,
              Gastroenterology, Colorectal Surgery, Critical Care, Andrology,
              Liver Sciences, Emergency, Preventive Health, Sports Medicine,
              Transplants, Bariatric Surgery, Pulmonology, and Nuclear Medicine.
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
              including CT scans, MRIs, Cardiac Surgeries, Dialysis procedures,
              and organ transplants, showcasing their commitment to
              comprehensive healthcare.
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
              Nephrology is a key focus area, with over 10,000 patients treated
              annually for kidney problems.
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
                  Street: 14 Cunningham Road near Sigma Central Mall, Vasanth
                  Nagar, Bangalore, India
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

        {/* <Card className=" mt-6 mb-6 w-[60%] mx-auto">
          <CardHeader className="text-gray-600">
            <CardTitle className="text-3xl px-4 flex justify-start">
              <h1 className="translate-y-[30%]">Address</h1>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="px-3 flex justify-start">
              <div className="font-semibold gap-1 flex justify-start">
              <Icon
                provider="lucide"
                name="MapPin"
                className="text-black-500"
                size={"1.4vw"}
              />
                <h1>
                  Street: 14 Cunningham Road near Sigma Central Mall, Vasanth
                  Nagar,Bangalore,India
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
        </Card> */}
      </div>
    </>
  );
};

export default page;
