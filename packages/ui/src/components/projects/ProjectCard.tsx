import { FC } from "react";
import { MetaText, Overline, Paragraph, Subheading } from "../typography";

export type ProjectCardProps = {
  // Legacy image-card props (kept for backward compatibility)
  image?: string;
  imageSrc?: string;
  imageAlt?: string;
  tag?: string;

  // Work-experience card props
  initials?: string;
  role?: string;
  company?: string;
  duration?: string;
  location?: string;
  summary?: string;
  achievements?: string[];
  technologies?: string[];
  className?: string;
};

const ProjectCard: FC<ProjectCardProps> = ({
  image,
  imageSrc,
  imageAlt,
  tag,
  initials,
  role,
  company,
  duration,
  location,
  summary,
  achievements,
  technologies,
  className,
}) => {
  const src = imageSrc ?? image;
  const hasWorkExperienceData = Boolean(role && company && summary);

  if (!hasWorkExperienceData && src) {
    return (
      <div className={`relative bg-neutral-gray rounded-[10px] sm:rounded-[12px] w-full aspect-square min-h-[240px] sm:min-h-[280px] lg:min-h-0 lg:h-[500px] xl:h-[600px] max-w-full lg:max-w-[500px] xl:max-w-[600px] ${className ?? ""}`.trim()}>
        <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 md:p-[56px]">
          <div className="relative w-full h-full border-2 border-black border-solid rounded-[10px] sm:rounded-[12px] overflow-hidden">
            <img src={src} alt={imageAlt ?? "Project"} className="w-full h-full object-cover rounded-[10px] sm:rounded-[12px]" />
          </div>
        </div>
        {tag && (
          <div className="absolute bg-background flex items-center justify-center left-3 sm:left-[16px] px-3 sm:px-[16px] py-1.5 sm:py-[8px] rounded-[100px] top-3 sm:top-[16px] z-10">
            <p className="font-manrope font-medium leading-[1.5] text-xs sm:text-[14px] text-foreground">{tag}</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <article
      className={`relative w-full rounded-[12px] border border-neutral-dark-gray bg-neutral-black/60 p-5 sm:p-6 md:p-8 ${className ?? ""}`.trim()}
    >
      <div className="flex flex-col gap-6 sm:gap-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-primary font-manrope text-sm font-bold text-neutral-black">
              {initials ?? (role ?? "").split(" ").slice(0, 2).map((part) => part[0] ?? "").join("").toUpperCase()}
            </div>
            <div>
              <Subheading className="sm:text-[34px]">{role ?? "Role"}</Subheading>
              <MetaText className="text-primary">{company ?? "Company"}</MetaText>
            </div>
          </div>
          <div className="text-left sm:text-right">
            <MetaText>{duration}</MetaText>
            <MetaText>{location}</MetaText>
          </div>
        </div>
        <Paragraph>{summary ?? ""}</Paragraph>

        <div className="space-y-3">
          <Overline>Key Achievements</Overline>
          <ul className="space-y-2">
            {(achievements ?? []).map((achievement) => (
              <li key={achievement} className="font-manrope font-medium leading-[1.6] text-neutral-offwhite text-sm sm:text-[16px]">
                <span className="mr-2 text-primary">•</span>
                {achievement}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <Overline>Technologies Used</Overline>
          <div className="flex flex-wrap gap-2">
            {(technologies ?? []).map((tech) => (
              <span
                key={tech}
                className="rounded-[100px] border border-neutral-dark-gray bg-neutral-gray px-3 py-1 font-manrope text-xs font-medium text-foreground sm:text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
