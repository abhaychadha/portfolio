import { FC, ReactNode } from "react";

export type PillProps = {
  children: ReactNode;
  className?: string;
};

const Pill: FC<PillProps> = ({ children, className }) => {
  return (
    <span
      className={`rounded-[100px] border border-primary bg-primary px-3 py-1.5 sm:py-2 font-manrope text-xs font-bold uppercase leading-[1.2] text-neutral-black sm:text-sm ${className ?? ""}`.trim()}
    >
      {children}
    </span>
  );
};

export default Pill;
