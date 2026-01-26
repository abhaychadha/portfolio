'use client';

import { FC, useEffect } from "react";
import { useAppFeatures } from "@/providers/FeatureFlagsProvider";
import Navigation from "@/components/navigation/Navigation";
import HeroSection from "@/components/hero/HeroSection";
import Line from "@/components/common/Line";
import FeaturedProjectsSection from "@/components/projects/FeaturedProjectsSection";
import AboutMeSection from "@/components/about/AboutMeSection";
import ContactSection from "@/components/contact/ContactSection";

const Home: FC = () => {
  const { smoothScroll, sectionSeparators } = useAppFeatures();

  useEffect(() => {
    if (smoothScroll) {
      document.documentElement.style.scrollBehavior = 'smooth';
    }
  }, [smoothScroll]);

  return (
    <div className="bg-background relative w-full min-h-screen" data-name="Home" data-node-id="7:29">
      <Navigation />

      <HeroSection />

      {sectionSeparators && (
        <div className="h-[1px] w-full">
          <Line />
        </div>
      )}

      <FeaturedProjectsSection />

      {sectionSeparators && (
        <div className="h-[1px] w-full">
          <Line />
        </div>
      )}

      <AboutMeSection />

      {sectionSeparators && (
        <div className="h-[1px] w-full">
          <Line />
        </div>
      )}

      <ContactSection />
    </div>
  );
};

export default Home;
