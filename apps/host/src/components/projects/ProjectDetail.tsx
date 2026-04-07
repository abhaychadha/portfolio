import { FC } from "react";
import { MetaText, Overline, Paragraph, Pill, ProjectCard, Subheading } from "@portfolio/ui";
import { useComponentFlags } from "@/providers/FeatureFlagsProvider";

export type ProjectDetailProps = {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  role: string;
  company: string;
  duration: string;
  location: string;
  summary: string;
  achievements: string[];
  technologies: string[];
  initials?: string;
};

const ProjectDetail: FC<ProjectDetailProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  role,
  company,
  duration,
  location,
  achievements,
  technologies,
  initials
}) => {
  const flags = useComponentFlags('ProjectDetail');
  const showImage = flags.image ?? true;
  const showLinks = flags.links ?? true;

  return (
    <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-[48px] items-start lg:items-center w-full max-w-full min-w-0">
      {showImage && imageSrc && (
        <ProjectCard imageSrc={imageSrc} imageAlt={imageAlt} tag={company} className="w-full max-w-full lg:max-w-[500px] xl:max-w-[600px] lg:shrink-0" />
      )}
      <div className="flex-1 flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-[48px] items-start w-full min-w-0">
        <div className="flex flex-col gap-3 sm:gap-4 md:gap-[16px] items-start w-full">
          <Subheading>{title}</Subheading>
          <Paragraph>{description}</Paragraph>
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
              <div key={item.label} className="border-neutral-dark-gray border-t flex font-manrope font-medium items-center justify-between leading-[1.6] px-0 py-3 sm:py-4 md:py-[16px] text-sm sm:text-[16px] w-full">
                <p className="text-foreground">{item.label}</p>
                <p className="text-neutral-offwhite text-right truncate max-w-[60%] sm:max-w-none">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:gap-4 md:gap-[16px] items-start w-full">
          <Overline className="text-foreground tracking-normal text-sm sm:text-[16px]">Key Achievements</Overline>
          <div className="flex flex-col gap-2 w-full">
            {achievements.map((achievement) => (
              <MetaText key={achievement}>
                <span className="text-primary mr-2">•</span>
                {achievement}
              </MetaText>
            ))}
          </div>
        </div>
        {showLinks && (
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-[16px] items-start w-full">
            <Overline className="text-foreground tracking-normal text-sm sm:text-[16px]">Technologies Used</Overline>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <Pill key={tech}>{tech}</Pill>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
