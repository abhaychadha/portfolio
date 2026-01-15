import { FC } from "react";

export type ProjectCardProps = {
  image: string;
  tag?: string;
  className?: string;
  ImageComponent?: FC<{ src: string; alt: string; fill?: boolean; className?: string; sizes?: string; priority?: boolean }>;
};

const ProjectCard: FC<ProjectCardProps> = ({ 
  image, 
  tag, 
  className,
  ImageComponent 
}) => {
  // Default img tag for non-Next.js usage
  const DefaultImage: FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className: imgClassName }) => (
    <img src={src} alt={alt} className={imgClassName} />
  );
  
  const ImgComponent = ImageComponent || DefaultImage;

  return (
    <div className={`relative size-[600px] ${className || ""}`} data-node-id="7:14">
      <div className="absolute bg-neutral-gray left-1/2 overflow-clip rounded-[12px] size-[600px] top-1/2 -translate-x-1/2 -translate-y-1/2" data-name="card" data-node-id="7:15">
        <div className="absolute border-2 border-black border-solid h-[347px] left-1/2 rounded-[12px] top-[calc(50%-0.5px)] -translate-x-1/2 -translate-y-1/2 w-[486px] relative" data-name="work" data-node-id="7:16">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px] relative">
            {ImageComponent ? (
              <ImgComponent
                src={image}
                alt="Project"
                fill
                className="object-cover rounded-[12px]"
                sizes="486px"
              />
            ) : (
              <ImgComponent
                src={image}
                alt="Project"
                className="object-cover rounded-[12px] w-full h-full"
              />
            )}
          </div>
        </div>
        {tag && (
          <div className="absolute bg-neutral-black flex items-center justify-center left-[16px] px-[16px] py-[8px] rounded-[100px] top-[16px]" data-name="tag" data-node-id="7:17">
            <p className="font-manrope font-medium leading-[1.5] text-[14px] text-white" data-node-id="7:18">
              {tag}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
