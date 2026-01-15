'use client';

import { FC, useEffect } from "react";
import Navigation from "@/components/navigation/Navigation";
import HeroSection from "@/components/hero/HeroSection";
import Line from "@/components/common/Line";
import FeaturedProjectsSection from "@/components/projects/FeaturedProjectsSection";
import AboutMeSection from "@/components/about/AboutMeSection";
import ContactSection from "@/components/contact/ContactSection";

const Home: FC = () => {
  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="bg-background relative w-full min-h-screen" data-name="Home" data-node-id="7:29">
      <Navigation />

      <HeroSection />

      <div className="h-[1px] w-full">
        <Line />
      </div>

      <FeaturedProjectsSection />

      <div className="h-[1px] w-full">
        <Line />
      </div>

      <AboutMeSection />

      <div className="h-[1px] w-full">
        <Line />
      </div>

      <ContactSection />
    </div>
  );
};

export default Home;
