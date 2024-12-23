import { CarouselLogo } from "@/components/patterns/CarouselLogo";
import { CTA } from "@/components/patterns/CTA";
import { HeroMain } from "@/components/patterns/HeroMain";
import { Milestones } from "@/components/patterns/Milestones";
import {
  Feature,
  FeatureGrid,
} from "@/components/patterns/sections/FeatureGrid";
import { FeatureWithImage } from "@/components/patterns/sections/FeatureWithImage";
import { Section } from "@/components/ui/section";
import { useTranslations } from "next-intl";

import { ComponentProps } from "react";

const partners: ComponentProps<typeof CarouselLogo>["items"] = [
  {
    src: "/images/logos/partners/Aster Hospitals Logo.webp",
    title: "Aster Hospitals Logo",
  },
  {
    src: "/images/logos/partners/Apollo Hospital Logo.webp",
    title: "Apollo Hospital Logo",
  },
  {
    src: "/images/logos/partners/ArtemisHospitallogo.jpg",
    title: "Artemis Hospitals Logo",
  },
  {
    src: "/images/logos/partners/Fortis-Logo.png",
    title: "Fortis Logo",
  },
  {
    src: "/images/logos/partners/hcg Oncology logo.png",
    title: "HCG Oncology Logo",
  },
  {
    src: "/images/logos/partners/Manipal Hospitals Logo.png",
    title: "Manipal Hospitals Logo",
  },
  {
    src: "/images/logos/partners/Medanta Hospitals Logo.jpg",
    title: "Medanta Hospitals Logo",
  },
  {
    src: "/images/logos/partners/Nova IVF Logo.png",
    title: "Nova IVF Logo",
  },
  {
    src: "/images/logos/partners/simshospitals logo.webp",
    title: "SIMS hospitals logo",
  },
];

export default function Home() {
  const t = useTranslations("HomePage");

  const features: Feature[] = [
    {
      icon: { provider: "phosphor", name: "IdentificationCard" }, // Replace with the actual icon name for Visa Support
      title: t("Visa_Support"),
      description: t("Visa_Assistance"),
    },
    {
      icon: { provider: "phosphor", name: "Hospital" }, // Replace with the actual icon name for Treatment
      title: t("Treatment"),
      description:
        t("Treatment_Coordination"),
    },
    {
      icon: { provider: "phosphor", name: "Translate" }, // Replace with the actual icon name for Language Support
      title: t("Language_Support"),
      description:
      t("Language_Assistance"),
    },
    {
      icon: { provider: "phosphor", name: "Bed" }, // Replace with the actual icon name for Local Accommodation
      title: t("Local_Accommodation"),
      description:
        t("Accommodation_Arrangement"),
    },
    {
      icon: { provider: "phosphor", name: "AirplaneTakeoff" }, // Replace with the actual icon name for Travel Booking
      title: t("Travel_Booking"),
      description:
        t("Booking_Management"),
    },
    {
      icon: { provider: "phosphor", name: "Handshake" }, // Replace with the actual icon name for On Ground Support
      title: t("On_Ground_Support"),
      description:
        t("Ground_Assistance"),
    },
  ];
  
  return (
    <>
      <Section className="bg-background">
        <HeroMain/>
      </Section>
      <div className="container mx-auto">
        <div className="relative -my-20 z-100 px-4 md:px-8 lg:px-16 py-12 bg-white rounded-lg shadow-lg">
          <Section>
            <FeatureGrid
              badge="WHAT WE DO"
              title={t("Our_Unique_Process")}
              features={features}
            />
          </Section>
          <Section>
            <div className="flex flex-col gap-10">
              <h2 className="text-xl md:text-3xl tracking-tighter lg:max-w-xl mx-auto font-bold text-center">
                Our Partners
              </h2>
              <CarouselLogo items={partners} />
            </div>
          </Section>
          <Section className="!pt-0 lg:pt-0">
            <Milestones />
            <FeatureWithImage />
          </Section>
          <CTA />
        </div>
      </div>
    </>
  );
}
