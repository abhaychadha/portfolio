'use client';

import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { heroConfig, ICONS } from "@portfolio/content";

const HeroSection: FC = () => {
  const { greeting, name, tagline, primaryCta, socialLinks, portraitImage } = heroConfig;

  return (
    <div className="relative max-w-[1440px] mx-auto px-[60px] pt-[126px] pb-[80px]">
      <div className="flex gap-[80px] items-center">
        <motion.div 
          className="flex flex-col gap-[40px] items-start flex-1 max-w-[544px]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          data-name="hero content" 
          data-node-id="7:61"
        >
          <div className="flex flex-col gap-[8px] items-start w-full" data-name="header and sub header" data-node-id="7:62">
            <div className="font-bebas leading-[0.9] text-[101px] text-foreground w-full" data-node-id="7:63">
              <p className="mb-0">{greeting}</p>
              <p>{name}</p>
            </div>
            <p className="font-manrope font-normal leading-[1.5] text-neutral-offwhite text-[18px] w-full" data-node-id="7:64">
              {tagline}
            </p>
          </div>
          <div className="flex gap-[16px] items-center" data-name="action" data-node-id="7:65">
            <a 
              href={primaryCta.action}
              className="bg-primary flex gap-[12px] h-[54px] items-center justify-center pl-[24px] pr-[6px] py-[20px] rounded-[100px] transition-transform hover:scale-105" 
              data-name="button" 
              data-node-id="7:66"
            >
              <p className="font-manrope font-bold leading-none text-neutral-black text-[16px] uppercase">
                {primaryCta.label}
              </p>
              <div className="relative size-[42px]" data-name="circle" data-node-id="7:66">
                <Image src={ICONS.ui.circle} alt="" width={42} height={42} />
              </div>
            </a>
            {socialLinks.map((social) => (
              <a 
                key={social.platform}
                href={social.href}
                className="bg-neutral-gray flex items-center justify-center rounded-[100px] size-[54px] transition-transform hover:scale-110"
                aria-label={social.ariaLabel}
              >
                <Image src={social.icon} alt={social.ariaLabel} width={26} height={26} />
              </a>
            ))}
          </div>
        </motion.div>
          
        <motion.div 
          className="flex-shrink-0 w-[600px]"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative bg-neutral-offwhite h-[700px] rounded-[16px] overflow-hidden" data-name="bg" data-node-id="7:59">
            <Image
              src={portraitImage.src}
              alt={portraitImage.alt}
              fill
              className="object-cover"
              sizes="600px"
              priority
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
