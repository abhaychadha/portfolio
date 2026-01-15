'use client';

import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { aboutConfig, IMAGES } from "@portfolio/content";

const AboutMeSection: FC = () => {
  const { title, headline, description, ctaLabel, ctaHref } = aboutConfig;

  return (
    <div className="max-w-[1440px] mx-auto px-[60px] py-[80px]">
      <motion.div 
        className="flex gap-[24px] items-start"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="font-bebas leading-[0.9] text-[101px] text-foreground flex-shrink-0 w-[544px]" data-node-id="7:226">
          {title}
        </p>
        <div className="flex flex-col items-start flex-1 max-w-[704px]" data-node-id="7:227">
          <div className="flex flex-col gap-[16px] items-start w-full" data-node-id="7:228">
            <p className="font-manrope font-medium leading-[1.4] text-[32px] text-foreground w-full" data-node-id="7:229">
              {headline}
            </p>
            <p className="font-manrope font-normal leading-[1.5] text-neutral-offwhite text-[18px] w-full" data-node-id="7:230">
              {description}
            </p>
          </div>
          <a href={ctaHref} className="flex flex-col gap-[4px] items-start mt-[32px] transition-transform hover:scale-105" data-name="view project" data-node-id="7:231">
            <p className="font-manrope font-bold leading-[1.5] text-primary text-[16px] uppercase" data-node-id="7:232">
              {ctaLabel}
            </p>
            <div className="h-0 relative w-full" data-name="underline" data-node-id="7:233">
              <Image src={IMAGES.decorative.underline4} alt="" width={200} height={2} className="w-full h-auto" />
            </div>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMeSection;
