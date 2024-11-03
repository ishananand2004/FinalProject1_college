import LeadGenerationForm from "@/components/forms/LeadGenerationForm";
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
import { ComponentProps } from "react";

// const features: Feature[] = [
//   {
//     title: "Easy to use",
//     description: "We've made it easy to use and understand.",
//     icon: "Check",
//   },
//   {
//     title: "Secure",
//     description: "Your data is always safe with us.",
//     icon: "Shield",
//   },
//   {
//     title: "Highly rated",
//     description: "Trusted by thousands of users.",
//     icon: "Star",
//   },
// ];

const features: Feature[] = [
  {
    icon: { provider: "phosphor", name: "IdentificationCard" }, // Replace with the actual icon name for Visa Support
    title: "Visa Support",
    description:
      "Assistance with visa applications and documentation to ensure a smooth travel process.",
  },
  {
    icon: { provider: "phosphor", name: "Hospital" }, // Replace with the actual icon name for Treatment
    title: "Treatment",
    description:
      "Coordination with top medical professionals and facilities for personalized treatment plans.",
  },
  {
    icon: { provider: "phosphor", name: "Translate" }, // Replace with the actual icon name for Language Support
    title: "Language Support",
    description:
      "Providing interpreters and language assistance to ensure clear communication.",
  },
  {
    icon: { provider: "phosphor", name: "Bed" }, // Replace with the actual icon name for Local Accommodation
    title: "Local Accommodation",
    description:
      "Arrangement of comfortable and convenient lodging near medical facilities.",
  },
  {
    icon: { provider: "phosphor", name: "AirplaneTakeoff" }, // Replace with the actual icon name for Travel Booking
    title: "Travel Booking",
    description:
      "Management of flight bookings and travel itineraries for a hassle-free journey.",
  },
  {
    icon: { provider: "phosphor", name: "Handshake" }, // Replace with the actual icon name for On Ground Support
    title: "On Ground Support",
    description:
      "Local assistance and support throughout your stay, from transportation to daily needs.",
  },
];

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
    src: "/images/logos/partners/ArtemisHospitalLogo.jpg",
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
  return (
    <>
      <section className="bg-background">
        <HeroMain />
        <LeadGenerationForm/>
      </section>
      <div className="container mx-auto ">
        <div className="relative -my-20 z-100 px-4 md:px-8 lg:px-16 py-12 bg-white rounded-lg shadow-lg">
          <Section>
            <FeatureGrid
              badge="WHAT WE DO"
              title="Our unique process makes your Medical Journey Smooth."
              features={features}
            />
          </Section>
          <Section>
            <div className="flex flex-col  gap-10">
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