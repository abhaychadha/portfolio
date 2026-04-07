'use client';

import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { heroConfig, ICONS } from "@portfolio/content";
import { Button, Heading, Paragraph } from "@portfolio/ui";
import { useComponentFlags } from "@/providers/FeatureFlagsProvider";

const HeroSection: FC = () => {
  const { greeting, name, tagline, primaryCta, socialLinks, portraitImage } = heroConfig;
  const flags = useComponentFlags('HeroSection');
  const heroAnimation = flags.animation ?? true;
  const heroSocialLinks = flags.socialLinks ?? true;
  const showPrimaryCta = flags.primaryCta ?? true;
  const showPortrait = flags.portrait ?? true;

  const contentClass = "flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-[40px] items-start flex-1 w-full max-w-full lg:max-w-[544px] min-w-0";
  const portraitClass = "w-full max-w-[280px] sm:max-w-[340px] md:max-w-[400px] lg:max-w-[480px] xl:w-[600px] shrink-0 mx-auto lg:mx-0";
  const motionPropsLeft = {
    initial: { opacity: 0, x: -50 } as const,
    animate: { opacity: 1, x: 0 } as const,
    transition: { duration: 0.8 },
  };
  const motionPropsRight = {
    initial: { opacity: 0, x: 50 } as const,
    animate: { opacity: 1, x: 0 } as const,
    transition: { duration: 0.8, delay: 0.2 },
  };

  const ContentWrapper = heroAnimation ? motion.div : 'div';
  const PortraitWrapper = heroAnimation ? motion.div : 'div';

  return (
    <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[60px] pt-12 sm:pt-16 md:pt-20 lg:pt-[100px] xl:pt-[126px] pb-10 sm:pb-14 md:pb-16 lg:pb-[80px]">
      <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-[80px] items-center lg:items-start">
        <ContentWrapper
          className={contentClass}
          {...(heroAnimation ? motionPropsLeft : {})}
          data-name="hero content"
          data-node-id="7:61"
        >
          <div className="flex flex-col gap-2 sm:gap-[8px] items-start w-full min-w-0" data-name="header and sub header" data-node-id="7:62">
            <Heading className="leading-[0.9] xl:text-8xl 2xl:text-[101px] w-full" data-node-id="7:63">
              <p className="mb-0">{greeting}</p>
              <p>{name}</p>
            </Heading>
            <Paragraph className="w-full" data-node-id="7:64">
              {tagline}
            </Paragraph>
          </div>
          <div className="flex gap-3 sm:gap-4 md:gap-[16px] items-center flex-wrap" data-name="action" data-node-id="7:65">
            {showPrimaryCta && (
              <Button
                href={primaryCta.action}
                size="md"
                data-name="button"
                data-node-id="7:66"
                trailingIcon={
                  <div className="relative size-8 sm:size-9 md:size-[42px]" data-name="circle" data-node-id="7:66">
                    <Image src={ICONS.ui.circle} alt="" width={42} height={42} className="w-full h-full" />
                  </div>
                }
              >
                {primaryCta.label}
              </Button>
            )}
            {heroSocialLinks &&
              socialLinks.map((social) => (
                <a 
                  key={social.platform}
                  href={social.href}
                  className="bg-neutral-gray flex items-center justify-center rounded-[100px] size-10 sm:size-12 md:size-[54px] transition-transform hover:scale-110 shrink-0"
                  aria-label={social.ariaLabel}
                >
                  <Image src={social.icon} alt={social.ariaLabel} width={26} height={26} className="w-5 h-5 sm:w-6 sm:h-6 md:w-[26px] md:h-[26px]" />
                </a>
              ))}
          </div>
        </ContentWrapper>

        {showPortrait && (
          <PortraitWrapper
            className={portraitClass}
            {...(heroAnimation ? motionPropsRight : {})}
          >
            <div className="relative bg-neutral-offwhite h-[280px] sm:h-[340px] md:h-[420px] lg:h-[520px] xl:h-[700px] rounded-[12px] sm:rounded-[16px] overflow-hidden" data-name="bg" data-node-id="7:59">
              <Image
                src={portraitImage.src}
                alt={portraitImage.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 280px, (max-width: 768px) 340px, (max-width: 1024px) 400px, (max-width: 1280px) 480px, 600px"
                priority
              />
            </div>
          </PortraitWrapper>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
