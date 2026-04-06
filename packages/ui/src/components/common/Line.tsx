import { FC } from "react";

export type LineProps = {
  className?: string;
  src: string;
  alt?: string;
};

const Line: FC<LineProps> = ({ className, src, alt = "" }) => {
  return (
    <div className={`relative w-full h-[1px] ${className || ""}`} data-node-id="7:77">
      <img src={src} alt={alt} className="block max-w-none w-full h-full" />
    </div>
  );
};

export default Line;
