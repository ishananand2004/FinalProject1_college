"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useEffect, useState } from "react";

interface CarouselLogoProps {
  items: {
    src: string;
    title: string;
  }[];
}

export const CarouselLogo = ({ items }: CarouselLogoProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 1000);
  }, [api, current]);

  return (
    <Carousel
      setApi={setApi}
      opts={{
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem
            className="basis-1/2 md:basis-1/4 lg:basis-1/6"
            key={index}
          >
            <div className="flex rounded-md aspect-square items-center justify-center p-6">
              <Image src={item.src} alt={item.title} width={200} height={200} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
