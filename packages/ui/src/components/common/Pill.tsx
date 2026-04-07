import { FC, ReactNode } from "react";

export type PillProps = {
  children: ReactNode;
  className?: string;
};

const Pill: FC<PillProps> = ({ children, className }) => {
  return (
    <span
      className={`rounded-[100px] border border-neutral-dark-gray bg-neutral-gray px-3 py-1 font-manrope text-xs font-medium text-foreground sm:text-sm ${className ?? ""}`.trim()}
    >
      {children}
    </span>
  );
};

export default Pill;
