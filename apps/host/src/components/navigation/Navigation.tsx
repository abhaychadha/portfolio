'use client';

import { FC } from "react";
import { navigationConfig } from "@portfolio/content";
import { MetaText } from "@portfolio/ui";
import { useComponentFlags } from "@/providers/FeatureFlagsProvider";
import ThemeToggle from "@/components/common/ThemeToggle";

const Navigation: FC = () => {
  const { brandName, links } = navigationConfig;
  const flags = useComponentFlags('Navigation');
  const showThemeToggle = flags.themeToggle ?? true;
  const showLinks = flags.links ?? true;

  return (
    <nav className="flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[60px] py-4 sm:py-5 md:py-6 w-full min-w-0" data-node-id="7:30">
      <p className="font-bebas text-neutral-offwhite text-xl sm:text-2xl md:text-[28px] lg:text-[32px] tracking-[-0.32px] truncate" data-node-id="7:31">
        {brandName}
      </p>
      <div className="flex gap-3 sm:gap-4 md:gap-6 lg:gap-[32px] items-center shrink-0" data-node-id="7:32">
        {showLinks && (
          <div className="flex font-manrope font-medium gap-3 sm:gap-4 md:gap-6 lg:gap-[32px] items-center text-neutral-offwhite text-sm sm:text-base tracking-[-0.48px]" data-node-id="7:33">
            {links.map((link, index) => (
              <a key={index} href={link.href} className="leading-[1.5] hover:text-primary transition-colors whitespace-nowrap">
                <MetaText className="text-inherit text-sm sm:text-base">{link.label}</MetaText>
              </a>
            ))}
          </div>
        )}
        {showThemeToggle && <ThemeToggle />}
      </div>
    </nav>
  );
};

export default Navigation;
