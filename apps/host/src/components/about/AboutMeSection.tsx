'use client';

import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { aboutConfig, IMAGES } from "@portfolio/content";
import { useComponentFlags } from "@/providers/FeatureFlagsProvider";

const AboutMeSection: FC = () => {
  const { title, headline, description, ctaLabel, ctaHref } = aboutConfig;
  const flags = useComponentFlags('AboutMeSection');
  const aboutAnimation = flags.animation ?? true;
  const showCtaLink = flags.ctaLink ?? true;

  const Wrapper = aboutAnimation ? motion.div : 'div';
  const motionProps = aboutAnimation
    ? {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 },
      }
    : {};

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[60px] py-12 sm:py-14 md:py-16 lg:py-20 xl:py-[80px]">
      <Wrapper className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-[24px] items-start" {...motionProps}>
        <p className="font-bebas leading-[0.9] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[101px] text-foreground shrink-0 w-full lg:w-[544px] min-w-0" data-node-id="7:226">
          {title}
        </p>
        <div className="flex flex-col items-start flex-1 w-full max-w-full lg:max-w-[704px] min-w-0" data-node-id="7:227">
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-[16px] items-start w-full" data-node-id="7:228">
            <p className="font-manrope font-medium leading-[1.4] text-xl sm:text-2xl md:text-[32px] text-foreground w-full" data-node-id="7:229">
              {headline}
            </p>
            <p className="font-manrope font-normal leading-[1.5] text-neutral-offwhite text-base sm:text-[18px] w-full" data-node-id="7:230">
              {description}
            </p>
          </div>
          {showCtaLink && (
            <a href={ctaHref} className="flex flex-col gap-1 sm:gap-[4px] items-start mt-6 sm:mt-8 md:mt-[32px] transition-transform hover:scale-105" data-name="view project" data-node-id="7:231">
              <p className="font-manrope font-bold leading-[1.5] text-primary text-sm sm:text-[16px] uppercase" data-node-id="7:232">
                {ctaLabel}
              </p>
              <div className="h-0 relative w-full" data-name="underline" data-node-id="7:233">
                <Image src={IMAGES.decorative.underline4} alt="" width={200} height={2} className="w-full h-auto max-w-[200px]" />
              </div>
            </a>
          )}
        </div>
      </Wrapper>
    </div>
  );
};

export default AboutMeSection;
