import { FC } from "react";

export type LineProps = {
  className?: string;
};

const Line: FC<LineProps> = ({ className }) => {
  return (
    <div className={`relative w-full h-[1px] ${className || ""}`} data-node-id="7:77">
      <img
        src="/line-4.svg"
        alt=""
        className="block max-w-none w-full h-full"
      />
    </div>
  );
};

export default Line;
