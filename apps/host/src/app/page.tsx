'use client';

import { FC, useEffect } from "react";
import { useAppFeatures } from "@/providers/FeatureFlagsProvider";
import Navigation from "@/components/navigation/Navigation";
import HeroSection from "@/components/hero/HeroSection";
import { IMAGES } from "@portfolio/content";
import { Line } from "@portfolio/ui";
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
    <div className="bg-background relative w-full min-h-screen min-w-0 overflow-x-hidden" data-name="Home" data-node-id="7:29">
      <Navigation />

      <HeroSection />

      {sectionSeparators && (
        <div className="h-[1px] w-full">
          <Line src={IMAGES.decorative.line4} />
        </div>
      )}

      <FeaturedProjectsSection />

      {sectionSeparators && (
        <div className="h-[1px] w-full">
          <Line src={IMAGES.decorative.line4} />
        </div>
      )}

      <AboutMeSection />

      {sectionSeparators && (
        <div className="h-[1px] w-full">
          <Line src={IMAGES.decorative.line4} />
        </div>
      )}

      <ContactSection />
    </div>
  );
};

export default Home;
