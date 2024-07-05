import * as React from "react";

import { CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import image1 from "@/public/LuMockUp_v1.png";
import image2 from "@/public/LuMockUp_v1.png";
import image3 from "@/public/LuMockUp_v1.png";

import Image from "next/image";
import { ProjectCard } from "./ui/projectCard";

export function ProjectCarousel() {
  const projectsImages = [image1, image2, image3];

  return (
    <Carousel
      className="w-full max-w-xs"
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        {projectsImages.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <ProjectCard>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">
                    <Image src={image} alt="Project Mock Up" />
                  </span>
                </CardContent>
              </ProjectCard>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
