import { FC } from "react";
import { Heading, Paragraph } from "./Typography";

export type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
};

const SectionHeader: FC<SectionHeaderProps> = ({
  title,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
}) => {
  return (
    <div className={`flex flex-col gap-2 sm:gap-[8px] items-start ${className ?? ""}`.trim()}>
      <Heading className={titleClassName}>{title}</Heading>
      {subtitle ? <Paragraph className={subtitleClassName}>{subtitle}</Paragraph> : null}
    </div>
  );
};

export default SectionHeader;
