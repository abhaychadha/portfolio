'use client';

import { FC } from "react";
import { navigationConfig } from "@portfolio/content";
import ThemeToggle from "@/components/common/ThemeToggle";

const Navigation: FC = () => {
  const { brandName, links } = navigationConfig;

  return (
    <nav className="flex items-center justify-between px-[60px] py-[24px] w-full" data-node-id="7:30">
      <p className="font-bebas text-neutral-offwhite text-[32px] tracking-[-0.32px]" data-node-id="7:31">
        {brandName}
      </p>
      <div className="flex gap-[32px] items-center" data-node-id="7:32">
        <div className="flex font-manrope font-medium gap-[32px] items-center text-neutral-offwhite text-[16px] tracking-[-0.48px]" data-node-id="7:33">
          {links.map((link, index) => (
            <a key={index} href={link.href} className="leading-[1.5] hover:text-primary transition-colors">
              {link.label}
            </a>
          ))}
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navigation;
