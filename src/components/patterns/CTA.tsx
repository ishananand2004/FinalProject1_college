import { Section } from "@/components/ui/section";
import Link from "next/link";
import { Button } from "../ui/button";
import { Icon } from "../ui/icon";
import { useTranslations } from "next-intl";


export function CTA() {

  const t = useTranslations("HomePage");
  
  return (
    <Section
      style={{ backgroundImage: `url(${"/images/caremedico-bg-map.webp"})` }}
    >
      <div className="flex flex-col gap-2 text-center my-10 lg:my-20">
        <h3 className="text-3xl md:text-4xl tracking-tighter mx-auto max-w-2xl font-regular">
          {t("Trusted_By_5000_Patients")}
        </h3>
        <div className="py-4">
          <Link
            target="_blank"
            href="https://api.whatsapp.com/send/?phone=%2B918130600627&text=Hi%2C+I+am+looking+for+receiving+Medical+Treatment+in+India."
          >
            <Button
              size={"lg"}
              className="gap-4 rounded-full bg-success text-success-foreground hover:bg-success/85 text-base h-auto py-3 hover:-translate-y-1 transition-all ease-in-out"
            >
              <Icon
                provider="phosphor"
                name="WhatsappLogo"
                className="w-4 h-4"
              />{" "}
              Chat on Whatsapp
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
}
