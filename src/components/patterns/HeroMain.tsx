import { Badge } from "@/components/ui/badge";
import Image from "next/image";



export const HeroMain = () => (
  <div className="w-full py-24 lg:py-32 bg-no-repeat bg-bottom relative overflow-hidden bg-[#FDFCFE]">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2 relative z-2">
        <div className="z-10 lg:pb-20">
          <div className="flex gap-4 flex-col px-4 z-10">
            <div>
              <Badge variant="outline" color="primary" className="text-primary">
                TRUSTED MEDICAL PARTNER IN INDIA
              </Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-3xl md:text-5xl max-w-lg tracking-tighter !leading-snug text-left font-regular">
                Your Health <br />
                Our Priority <br />
                Guiding You Every Step
              </h1>
            </div>
          </div>
        </div>
        <div className="z-10">
          <div className="grid grid-cols-2 gap-8 px-4">
            {/* <div className="bg-muted rounded-md aspect-square"></div>
            <div className="bg-muted rounded-md row-span-2"></div>
            <div className="bg-muted rounded-md aspect-square"></div> */}
          </div>
        </div>
      </div>
      <div className="hidden md:block w-full absolute -bottom-60 left-0 right-0 -z-0">
        <Image
          src="/images/group-of-doctors-giving-confidence-and-trust-to-the-patient.webp"
          className="w-screen aspect-auto"
          alt="group-of-doctors-giving-confidence-and-trust-to-the-patient"
          width={1536}
          height={512}
        />
      </div>
    </div>
  </div>
);

