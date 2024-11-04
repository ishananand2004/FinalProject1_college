import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/ui/icon";
import Image from "next/image";

const features = [
  {
    name: "Efficient Journey Planning",
    icon: { provider: "lucide", name: "Check" },
  },
  { name: "Quick Access to Care", icon: { provider: "lucide", name: "Check" } },
  {
    name: "Streamlined Communication",
    icon: { provider: "lucide", name: "Check" },
  },
  {
    name: "Comprehensive Support",
    icon: { provider: "lucide", name: "Check" },
  },
] as const;

export const FeatureWithImage = () => (
  <div className="flex flex-col lg:flex-row gap-10 lg:items-center">
    <div className="flex gap-4 flex-col flex-1">
      <div>
        <Badge variant={"secondary"}>OUR TEAM</Badge>
      </div>
      <div className="flex gap-2 flex-col lg:pr-5">
        <h2 className="text-xl md:text-3xl lg:text-4xl tracking-tighter lg:max-w-xl font-regular text-left mb-4 ">
          Save your time by choosing us.
        </h2>
        <p className="text-lg  leading-normal tracking-tight text-muted-foreground text-left">
          At Caremedico, we understand that navigating healthcare abroad can be
          complex and time-consuming. By choosing us as your medical tourism
          partner, you streamline the entire process, allowing you to focus on
          what truly matters—your health and recovery.
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
);
