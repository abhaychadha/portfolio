'use client';

import { FC } from "react";
import Image from "next/image";
import { useComponentFlags } from "@/providers/FeatureFlagsProvider";
import ProjectCard from "./ProjectCard";

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
  useProjectCard?: boolean;
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
  useProjectCard = false,
}) => {
  const flags = useComponentFlags('ProjectDetail');
  const showImage = flags.image ?? true;
  const showTag = flags.tag ?? true;
  const showLinks = flags.links ?? true;

  return (
    <div className="flex gap-[48px] items-center w-[1224px]" data-name="project" data-node-id="7:85">
      {showImage && (useProjectCard && image ? (
        <ProjectCard image={image} tag={showTag ? tag : undefined} className="shrink-0" />
      ) : (
        <div className="bg-neutral-gray relative rounded-[12px] shrink-0 w-[600px] h-[600px]" data-name="project image" data-node-id="7:118">
          <div className="absolute inset-0 flex items-center justify-center p-[56px]" data-name="image container" data-node-id="7:119">
            <div className="relative w-full h-full">
              {imageSrc && (
                <Image
                  src={imageSrc}
                  alt={imageAlt || title}
                  fill
                  className="object-contain rounded-[12px]"
                  sizes="(max-width: 768px) 100vw, 488px"
                />
              )}
            </div>
          </div>
          {showTag && tag && (
            <div className="absolute bg-background flex items-center justify-center left-[16px] px-[16px] py-[8px] rounded-[100px] top-[16px] z-10" data-node-id="7:146">
              <p className="font-manrope font-medium leading-[1.5] text-[14px] text-foreground" data-node-id="7:147">
                {tag}
              </p>
            </div>
          )}
        </div>
      ))}
      
      <div className="flex-1 flex flex-col gap-[48px] items-start" data-name="project content" data-node-id="7:87">
        <div className="flex flex-col gap-[32px] items-start w-full" data-name="information" data-node-id="7:88">
          <div className="flex flex-col gap-[16px] items-start w-full" data-name="title and description" data-node-id="7:89">
            <p className="font-manrope font-medium leading-[1.4] text-[32px] text-foreground w-full" data-node-id="7:90">
              {title}
            </p>
            <p className="font-manrope font-normal leading-[1.5] text-neutral-offwhite text-[18px] w-full" data-node-id="7:91">
              {description}
            </p>
          </div>
          <div className="flex flex-col gap-[16px] items-start w-full" data-name="project info" data-node-id="7:92">
            <p className="font-manrope font-semibold leading-[1.5] text-[16px] text-foreground uppercase" data-node-id="7:93">
              Project Info
            </p>
            <div className="border-neutral-dark-gray border-b flex flex-col w-full" data-name="List" data-node-id="7:94">
              {info.map((item, index) => (
                <div key={index} className="border-neutral-dark-gray border-t flex font-manrope font-medium items-center justify-between leading-[1.6] px-0 py-[16px] text-[16px] w-full" data-name={item.label.toLowerCase()} data-node-id={`7:${98 + index}`}>
                  <p className="text-foreground" data-node-id={`7:${99 + index}`}>{item.label}</p>
                  <p className="text-neutral-offwhite" data-node-id={`7:${100 + index}`}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {showLinks && (
          <div className="flex gap-[24px] items-start" data-node-id="7:104">
            {links.map((link, index) => (
              <a key={index} href={link.href} className="flex flex-col gap-[4px] items-start" data-name="view project" data-node-id={`7:${105 + index}`}>
                <div className="flex gap-[4px] items-start" data-name="title and arrow" data-node-id={`7:${106 + index}`}>
                  <p className="font-manrope font-bold leading-[1.5] text-primary text-[16px] uppercase" data-node-id={`7:${107 + index}`}>
                    {link.label}
                  </p>
                  {link.icon && <Image src={link.icon} alt="" width={24} height={24} data-name="arrow" data-node-id={`7:${108 + index}`} />}
                </div>
                {link.underline && (
                  <div className="h-0 relative w-full" data-name="underline" data-node-id={`7:${110 + index}`}>
                    <Image src={link.underline} alt="" width={200} height={2} className="w-full h-auto" />
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
