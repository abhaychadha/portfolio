import { FC } from "react";
import Image from "next/image";
import { IMAGES } from "@portfolio/content";

const Line: FC = () => {
  return (
    <div className="relative w-full h-[1px]" data-node-id="7:77">
      <Image
        src={IMAGES.decorative.line4}
        alt=""
        width={1320}
        height={1}
        className="block w-full max-w-full h-auto"
      />
    </div>
  );
};

export default Line;
