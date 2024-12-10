import React from "react";
import { HeroSlider } from './HeroSlider/HeroSlider.jsx';
import { SearchBar } from './HeroSlider/SearchBar.jsx';
import TravelPackages from './TravelPackages'
import { PopularDestinations } from './PopularDestinations/PopularDestinations';
import WhyTravelSection from "./WhyTravelSection";
import features from "./featuresData"; // استيراد البيانات من الملف
import TestimonialsSection from "./TestimonialsSection";
import testimonials from "./testimonialsData";
const Home = () => (
  <section className="relative">
      <HeroSlider />
     
      <SearchBar />
      <br />
      <br />
     
      <div className=" bg-gray-100">
      <TravelPackages />
    </div>
    <div className=" bg-gray-50 dark:bg-gray-900 dark:text-white ">
      <PopularDestinations />
    </div>
    <div>
      <WhyTravelSection
        title="Why Travel with Africa wizzy Safari"
        subtitle="Why us?"
        features={features} // تمرير البيانات كـ props
      />
    </div>
    <div>
      <TestimonialsSection
        title="What our clients say about us"
        subtitle="Our Traveller Say"
        testimonials={testimonials}
      />
    </div>
    </section>
);

export default Home;
