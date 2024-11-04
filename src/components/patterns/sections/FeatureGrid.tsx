import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Icon, IconName } from "../../ui/icon";

// Define the interface for individual feature items, including the icon
export interface Feature {
  title: string;
  description: string;
  icon?: IconName; // Optional icon property
}

// Define the interface for the FeatureMain component props
interface FeatureGridProps {
  badge?: string;
  title: string;
  description?: string;
  features: Feature[];
}

const textColorPallete = ["text-primary", "text-success", "text-indigo"];
const bgColorPallete = [
  "bg-primary-foreground",
  "bg-success-foreground",
  "bg-indigo-foreground",
];

export const FeatureGrid: React.FC<FeatureGridProps> = ({
  badge,
  title,
  description,
  features,
}) => (
  <div className="w-full text-center">
    <div className="container mx-auto">
      <div className="flex gap-4 flex-col items-center">
        <div>{badge && <Badge variant={"secondary"}>{badge}</Badge>}</div>
        <div className="flex gap-2 flex-col">
          <h2 className="text-3xl md:text-4xl tracking-tighter lg:max-w-xl font-bold">
            {title}
          </h2>
          {description && (
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              {description}
            </p>
          )}
        </div>
        <div className="flex gap-10 pt-12 flex-col w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 items-start lg:grid-cols-3 gap-10">
            {features.map((feature, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center px-4 py-6"
                >
                  <div
                    className={cn(
                      "p-3 mb-4 rounded-sm",
                      `${bgColorPallete[index % bgColorPallete.length]}`
                    )}
                  >
                    <Icon
                      {...(feature.icon || {
                        provider: "lucide",
                        name: "Check",
                      })}
                      className={cn(
                        "w-10 h-10",
                        `${textColorPallete[index % textColorPallete.length]}`
                      )}
                    />
                  </div>
                  <div className="text-base lg:text-lg font-semibold mb-2">
                    {feature.title}
                  </div>
                  <div className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                    {feature.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  </div>
);
