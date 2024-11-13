/* eslint-disable @typescript-eslint/no-unused-vars */
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { LeadGenerationForm } from "../forms/LeadGenerationForm";
import { useTranslations } from "next-intl";


export const HeroMain = () => {
  const t = useTranslations("HomePage");

  return (
    <div className="w-full py-24 lg:py-32 bg-no-repeat bg-bottom relative overflow-hidden bg-[#FDFCFE]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2 relative z-2">
          <div className="z-10 lg:pb-20">
            <div className="flex gap-4 flex-col px-4 z-10">
              <div>
                <Badge variant="outline" color="primary" className="text-primary">
                  {t("TRUSTED_MEDICAL_PARTNER_IN_INDIA")}
                </Badge>
              </div>
              <div className="flex gap-4 flex-col">
                <h1 className="text-3xl md:text-4xl max-w-lg tracking-tighter !leading-snug text-left font-regular md:font-semibold">
                  {t("Your_Health")} <br />
                  {t("Our_Priority")} <br />
                  {t("Guiding_You_Every_Step")}
                </h1>
              </div>
            </div>
          </div>
          <div className="z-10">
            <div className="max-w-md mx-auto md:ml-auto p-6 border border-primary/40 rounded-3xl shadow-lg bg-white">
              <h2 className="text-2xl font-bold text-primary mb-6">
                {t("Need_Help_Lets_Talk")}
              </h2>
              <LeadGenerationForm />
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
};
