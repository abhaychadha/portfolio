import { FC } from "react";
import Navigation from "@/components/navigation/Navigation";
import SkillsMicrofrontend from "@/components/skills/SkillsMicrofrontend";
import { IMAGES } from "@portfolio/content";
import { Line } from "@portfolio/ui";

const SkillsPage: FC = () => {
  return (
    <div className="bg-background relative w-full min-h-screen min-w-0 overflow-x-hidden">
      <Navigation />
      <div className="h-[1px] w-full">
        <Line src={IMAGES.decorative.line4} />
      </div>
      <SkillsMicrofrontend />
    </div>
  );
};

export default SkillsPage;
