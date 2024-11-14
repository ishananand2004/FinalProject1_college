import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/ui/icon";
import { useTranslations } from "next-intl";
import Image from "next/image";



export const FeatureWithImage = () => {
  
  

  const t = useTranslations("HomePage");

  const features = [
    {
      name: t("Efficient_Journey_Planning"),
      icon: { provider: "lucide", name: "Check" },
    },
    { name: t("Quick_Access_To_Care"), 
      icon: { provider: "lucide", name: "Check" } },
    {
      name: t("Streamlined_Communication"),
      icon: { provider: "lucide", name: "Check" },
    },
    {
      name: t("Comprehensive_Support"),
      icon: { provider: "lucide", name: "Check" },
    },
  ] as const;
return (
  <div className="flex flex-col lg:flex-row gap-10 lg:items-center">
    <div className="flex gap-4 flex-col flex-1">
      <div>
        <Badge variant={"secondary"}>WHY US?</Badge>
      </div>
      <div className="flex gap-2 flex-col lg:pr-5">
        <h2 className="text-xl md:text-3xl lg:text-4xl tracking-tighter lg:max-w-xl font-regular text-left mb-4 ">
          {t("Save_Time_With_Us")}
        </h2>
        <p className="text-lg  leading-normal tracking-tight text-muted-foreground text-left">
          {t("Caremedico_Description")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Icon
                {...feature.icon}
                className="w-5 h-5 rounded-full bg-muted p-1"
              />
              <span className="text-gray-800">{feature.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="rounded-md w-full aspect-square h-full flex-1">
      <Image
        src={"/images/our-team-image.webp"}
        alt="Our Team"
        className="rounded-lg"
        width={800}
        height={800}
      />
    </div>
  </div>
)
  
};
