import { FC } from "react";

export type ProjectCardProps = {
  image?: string;
  imageSrc?: string;
  imageAlt?: string;
  tag?: string;
  className?: string;
};

const ProjectCard: FC<ProjectCardProps> = ({ image, imageSrc, imageAlt, tag, className }) => {
  const src = imageSrc ?? image;

  return (
    <div className={`relative bg-neutral-gray rounded-[10px] sm:rounded-[12px] w-full aspect-square min-h-[240px] sm:min-h-[280px] lg:min-h-0 lg:h-[500px] xl:h-[600px] max-w-full lg:max-w-[500px] xl:max-w-[600px] ${className ?? ""}`.trim()} data-node-id="7:14">
      <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 md:p-[56px]" data-name="card" data-node-id="7:15">
        <div className="relative w-full h-full border-2 border-black border-solid rounded-[10px] sm:rounded-[12px] overflow-hidden" data-name="work" data-node-id="7:16">
          {src && (
            <img
              src={src}
              alt={imageAlt ?? "Project"}
              className="w-full h-full object-cover rounded-[10px] sm:rounded-[12px]"
            />
          )}
        </div>
      </div>
      {tag && (
        <div className="absolute bg-background flex items-center justify-center left-3 sm:left-[16px] px-3 sm:px-[16px] py-1.5 sm:py-[8px] rounded-[100px] top-3 sm:top-[16px] z-10" data-name="tag" data-node-id="7:17">
          <p className="font-manrope font-medium leading-[1.5] text-xs sm:text-[14px] text-foreground" data-node-id="7:18">
            {tag}
          </p>
        </div>
      )}
      </div>
    
  );
};

export default ProjectCard;
