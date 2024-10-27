import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const HeroMain = () => (
  <div className="w-full py-24 lg:py-32">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
        <div>
          <div className="flex gap-4 flex-col px-4">
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
              {/* <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
              Managing a small business today is already tough. Avoid further
              complications by ditching outdated, tedious trade methods. Our
              goal is to streamline SMB trade, making it easier and faster than
              ever.
            </p> */}
            </div>
            {/* <div className="flex flex-row gap-4">
            <Button size="lg" className="gap-4" variant="outline">
              Jump on a call <PhoneCall className="w-4 h-4" />
            </Button>
            <Button size="lg" className="gap-4">
              Sign up here <MoveRight className="w-4 h-4" />
            </Button>
          </div> */}
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-8 px-4">
            <div className="bg-muted rounded-md aspect-square"></div>
            <div className="bg-muted rounded-md row-span-2"></div>
            <div className="bg-muted rounded-md aspect-square"></div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  </div>
);
