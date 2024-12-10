import React, { useState } from "react";
import { DestinationCard } from "./DestinationCard";
import { NavigationButton } from "./NavigationButton";
import { destinations } from "./destinations";

export function PopularDestinations() {
  const [startIndex, setStartIndex] = useState(0);

  const showPrev = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const showNext = () => {
    setStartIndex((prev) => Math.min(destinations.length - 1, prev + 1));
  };

  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl lg:max-w-5xl xl:max-w-4xl mx-auto ">
      <div className="text-center mb-12">
        <h2 className="text-yellow-500 text-2xl mb-2">Popular Destinations</h2>
        <h3 className="text-3xl dark:text-white font-bold text-gray-900">
          Select Our Best Popular Destinations
        </h3>
      </div>

      <div className="relative px-8">
        <div className="flex justify-between items-center absolute -left-4 -right-4 top-1/2 -translate-y-1/2">
          <NavigationButton direction="prev" onClick={showPrev} />
          <NavigationButton direction="next" onClick={showNext} />
        </div>

        <div className="overflow-hidden py-8">
          <div
            className="flex transition-transform duration-300"
            style={{
              transform: `translateX(-${startIndex * 100}%)`,
            }}
          >
            {destinations.map((destination) => (
              <div
                key={destination.title}
                className="w-full flex-shrink-0"
              >
                <DestinationCard {...destination} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
