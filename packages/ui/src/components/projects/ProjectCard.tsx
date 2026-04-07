import { FC } from "react";
import { Pill } from "../common";
import { MetaText, Overline, Paragraph, Subheading } from "../typography";

export type ProjectCardProps = {
  // Media props
  image?: string;
  imageSrc?: string;
  imageAlt?: string;
  tag?: string;

  // Holistic project-detail props
  title?: string;
  description?: string;
  initials?: string;
  role?: string;
  company?: string;
  duration?: string;
  location?: string;
  summary?: string;
  achievements?: string[];
  technologies?: string[];
  showImage?: boolean;
  showTechnologies?: boolean;
  className?: string;
};

const ProjectCard: FC<ProjectCardProps> = ({
  image,
  imageSrc,
  imageAlt,
  tag,
  title,
  description,
  initials,
  role,
  company,
  duration,
  location,
  summary,
  achievements,
  technologies,
  showImage = true,
  showTechnologies = true,
  className,
}) => {
  const src = imageSrc ?? image;
  const hasHolisticData = Boolean(title && description && role && company);

  // Legacy image-only usage fallback
  if (!hasHolisticData && src) {
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
    <article className={`w-full rounded-[14px] border border-neutral-dark-gray bg-neutral-black/40 p-4 sm:p-5 md:p-6 ${className ?? ""}`.trim()}>
      <div className="flex flex-col lg:flex-row gap-5 sm:gap-6 lg:gap-10 items-start lg:items-center w-full max-w-full min-w-0">
      {showImage && src && (
        <div className="relative bg-neutral-gray rounded-[10px] sm:rounded-[12px] w-full aspect-square min-h-[220px] sm:min-h-[260px] lg:min-h-0 lg:h-[500px] xl:h-[600px] max-w-full lg:max-w-[500px] xl:max-w-[600px] lg:shrink-0">
          <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 md:p-[56px]">
            <div className="relative w-full h-full border-2 border-black border-solid rounded-[10px] sm:rounded-[12px] overflow-hidden">
              <img src={src} alt={imageAlt ?? "Project"} className="w-full h-full object-cover rounded-[10px] sm:rounded-[12px]" />
            </div>
          </div>
          <div className="absolute bg-background flex items-center justify-center left-3 sm:left-[16px] px-3 sm:px-[16px] py-1.5 sm:py-[8px] rounded-[100px] top-3 sm:top-[16px] z-10">
            <p className="font-manrope font-medium leading-[1.5] text-xs sm:text-[14px] text-foreground">{tag ?? company}</p>
          </div>
        </div>
      )}

      <div className="flex-1 flex flex-col gap-5 sm:gap-7 md:gap-8 lg:gap-10 items-start w-full min-w-0">
        <div className="flex flex-col gap-3 sm:gap-4 md:gap-[16px] items-start w-full">
          <Subheading className="break-words">{title ?? ""}</Subheading>
          <Paragraph>{description ?? ""}</Paragraph>
        </div>

        <div className="flex flex-col gap-3 sm:gap-4 md:gap-[16px] items-start w-full">
          <Overline className="text-foreground tracking-normal text-sm sm:text-[16px]">Project Info</Overline>
          <div className="border-neutral-dark-gray border-b flex flex-col w-full">
            {[
              { label: "Role", value: role },
              { label: "Organisation", value: company },
              { label: "Duration", value: duration },
              { label: "Location", value: location },
            ].map((item) => (
              <div key={item.label} className="border-neutral-dark-gray border-t flex flex-col gap-1 sm:gap-0 sm:flex-row font-manrope font-medium sm:items-center sm:justify-between leading-[1.6] px-0 py-3 sm:py-4 md:py-[16px] text-sm sm:text-[16px] w-full">
                <p className="text-foreground">{item.label}</p>
                <p className="text-neutral-offwhite text-left sm:text-right break-words sm:max-w-[60%]">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:gap-4 md:gap-[16px] items-start w-full">
          <Overline className="text-foreground tracking-normal text-sm sm:text-[16px]">Key Achievements</Overline>
          <div className="flex flex-col gap-2 w-full">
            {(achievements ?? []).map((achievement) => (
              <MetaText key={achievement}>
                <span className="text-primary mr-2">•</span>
                {achievement}
              </MetaText>
            ))}
          </div>
        </div>

        {showTechnologies && (
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-[16px] items-start w-full">
            <Overline className="text-foreground tracking-normal text-sm sm:text-[16px]">Technologies Used</Overline>
            <div className="flex flex-wrap gap-2">
              {(technologies ?? []).map((tech) => (
                <Pill key={tech}>{tech}</Pill>
              ))}
            </div>
          </div>
        )}
      </div>
      </div>
    </article>
  );
};

export default ProjectCard;
