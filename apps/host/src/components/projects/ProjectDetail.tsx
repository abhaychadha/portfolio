'use client';

import { FC } from "react";
import Image from "next/image";
import { useComponentFlags } from "@/providers/FeatureFlagsProvider";
import { ProjectCard } from "@portfolio/ui";

export type ProjectInfoItem = {
  label: string;
  value: string;
};

export type ProjectLink = {
  label: string;
  href: string;
  icon?: string;
  underline?: string;
};

export type ProjectDetailProps = {
  image?: string;
  imageSrc?: string;
  imageAlt?: string;
  tag?: string;
  title: string;
  description: string;
  info: ProjectInfoItem[];
  links: ProjectLink[];
};

const ProjectDetail: FC<ProjectDetailProps> = ({
  image,
  imageSrc,
  imageAlt,
  tag,
  title,
  description,
  info,
  links,
}) => {
  const flags = useComponentFlags('ProjectDetail');
  const showImage = flags.image ?? true;
  const showTag = flags.tag ?? true;
  const showLinks = flags.links ?? true;

  return (
    <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-[48px] items-start lg:items-center w-full max-w-full min-w-0" data-name="project" data-node-id="7:85">
      {showImage && (image || imageSrc) && (
        <ProjectCard image={image} imageSrc={imageSrc} imageAlt={imageAlt} tag={showTag ? tag : undefined} className="w-full max-w-full lg:max-w-[500px] xl:max-w-[600px] lg:shrink-0" />
      )}
      
      <div className="flex-1 flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-[48px] items-start w-full min-w-0" data-name="project content" data-node-id="7:87">
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-[32px] items-start w-full" data-name="information" data-node-id="7:88">
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-[16px] items-start w-full" data-name="title and description" data-node-id="7:89">
            <p className="font-manrope font-medium leading-[1.4] text-xl sm:text-2xl md:text-[32px] text-foreground w-full" data-node-id="7:90">
              {title}
            </p>
            <p className="font-manrope font-normal leading-[1.5] text-neutral-offwhite text-base sm:text-[18px] w-full" data-node-id="7:91">
              {description}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-[16px] items-start w-full" data-name="project info" data-node-id="7:92">
            <p className="font-manrope font-semibold leading-[1.5] text-sm sm:text-[16px] text-foreground uppercase" data-node-id="7:93">
              Project Info
            </p>
            <div className="border-neutral-dark-gray border-b flex flex-col w-full" data-name="List" data-node-id="7:94">
              {info.map((item, index) => (
                <div key={index} className="border-neutral-dark-gray border-t flex font-manrope font-medium items-center justify-between leading-[1.6] px-0 py-3 sm:py-4 md:py-[16px] text-sm sm:text-[16px] w-full" data-name={item.label.toLowerCase()} data-node-id={`7:${98 + index}`}>
                  <p className="text-foreground" data-node-id={`7:${99 + index}`}>{item.label}</p>
                  <p className="text-neutral-offwhite text-right truncate max-w-[50%] sm:max-w-none" data-node-id={`7:${100 + index}`}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {showLinks && (
          <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-[24px] items-start" data-node-id="7:104">
            {links.map((link, index) => (
              <a key={index} href={link.href} className="flex flex-col gap-1 sm:gap-[4px] items-start" data-name="view project" data-node-id={`7:${105 + index}`}>
                <div className="flex gap-1 sm:gap-[4px] items-start" data-name="title and arrow" data-node-id={`7:${106 + index}`}>
                  <p className="font-manrope font-bold leading-[1.5] text-primary text-sm sm:text-[16px] uppercase" data-node-id={`7:${107 + index}`}>
                    {link.label}
                  </p>
                  {link.icon && <Image src={link.icon} alt="" width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" data-name="arrow" data-node-id={`7:${108 + index}`} />}
                </div>
                {link.underline && (
                  <div className="relative w-full h-[2px]" data-name="underline" data-node-id={`7:${110 + index}`}>
                    <Image src={link.underline} alt="" width={200} height={2} className="block w-full h-full max-w-[180px] sm:max-w-[200px]" />
                  </div>
                )}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
