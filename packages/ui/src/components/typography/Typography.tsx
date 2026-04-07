import { FC, HTMLAttributes, ReactNode } from "react";

type TypographyProps = {
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLParagraphElement>;

export const Heading: FC<TypographyProps> = ({ children, className, ...props }) => (
  <p {...props} className={`font-bebas leading-none text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[76px] text-foreground ${className ?? ""}`.trim()}>
    {children}
  </p>
);

export const Subheading: FC<TypographyProps> = ({ children, className, ...props }) => (
  <p {...props} className={`font-manrope font-medium leading-[1.4] text-xl sm:text-2xl md:text-[32px] text-foreground ${className ?? ""}`.trim()}>
    {children}
  </p>
);

export const Paragraph: FC<TypographyProps> = ({ children, className, ...props }) => (
  <p {...props} className={`font-manrope font-normal leading-[1.5] text-neutral-offwhite text-base sm:text-[18px] ${className ?? ""}`.trim()}>
    {children}
  </p>
);

export const Overline: FC<TypographyProps> = ({ children, className, ...props }) => (
  <p {...props} className={`font-manrope font-semibold leading-[1.5] text-xs sm:text-sm tracking-[0.14em] uppercase text-neutral-offwhite ${className ?? ""}`.trim()}>
    {children}
  </p>
);

export const MetaText: FC<TypographyProps> = ({ children, className, ...props }) => (
  <p {...props} className={`font-manrope font-medium leading-[1.6] text-neutral-offwhite text-sm sm:text-[16px] ${className ?? ""}`.trim()}>
    {children}
  </p>
);
