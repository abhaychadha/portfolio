import { FC } from "react";
import Image from "next/image";

export type ProjectCardProps = {
  image: string;
  tag?: string;
  className?: string;
};

const ProjectCard: FC<ProjectCardProps> = ({ image, tag, className }) => {
  return (
    <div className={`relative bg-neutral-gray rounded-[12px] w-[600px] h-[600px] ${className}`} data-node-id="7:14">
      <div className="absolute inset-0 flex items-center justify-center p-[56px]" data-name="card" data-node-id="7:15">
        <div className="relative w-full h-full border-2 border-black border-solid rounded-[12px] overflow-hidden" data-name="work" data-node-id="7:16">
          <Image
            src={image}
            alt="Project"
            fill
            className="object-cover rounded-[12px]"
            sizes="(max-width: 768px) 100vw, 486px"
          />
        </div>
      </div>
      {tag && (
        <div className="absolute bg-background flex items-center justify-center left-[16px] px-[16px] py-[8px] rounded-[100px] top-[16px] z-10" data-name="tag" data-node-id="7:17">
          <p className="font-manrope font-medium leading-[1.5] text-[14px] text-foreground" data-node-id="7:18">
            {tag}
          </p>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
