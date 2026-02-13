"use client";

import { cn } from "@/lib/utils";

interface InfiniteLogoCarouselProps {
  className?: string;
}

const gymNames = [
  "FitHub",
  "Apex Fitness",
  "Zen Warrior",
  "Iron Works",
  "Peak Performance",
  "Core Strength",
  "Elevate Gym",
  "Summit Fitness",
  "Forge Athletics",
  "Pulse Studio",
];

export function InfiniteLogoCarousel({ className }: InfiniteLogoCarouselProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-deep-space to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-deep-space to-transparent z-10" />
      <div className="flex animate-scroll-left">
        {[...gymNames, ...gymNames].map((name, i) => (
          <div
            key={i}
            className="flex-shrink-0 mx-8 flex items-center justify-center"
          >
            <span className="text-dim-gray text-lg font-semibold whitespace-nowrap opacity-50 hover:opacity-80 transition-opacity">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
