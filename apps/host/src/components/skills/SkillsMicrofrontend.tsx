'use client';

import { FC } from "react";
import { SectionHeader } from "@portfolio/ui";
import RemoteModuleLoader from "@/components/microfrontends/RemoteModuleLoader";

const SKILLS_REMOTE_URL =
  process.env.NEXT_PUBLIC_SKILLS_REMOTE_URL || "http://localhost:4001";

const SkillsMicrofrontend: FC = () => {
  return (
    <section
      className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[60px] py-12 sm:py-14 md:py-16 lg:py-20 xl:py-[80px] w-full"
    >
      <SectionHeader
        title="Technical Skills"
        subtitle="A comprehensive toolkit refined through years of hands-on experience and continuous learning in modern software development."
        className="w-full max-w-full md:max-w-[700px] mb-6 sm:mb-8"
      />
      <RemoteModuleLoader
        remoteName="skills"
        remoteUrl={SKILLS_REMOTE_URL}
        exposedModule="./SkillsSection"
        moduleProps={{ id: "skills" }}
        loadingFallback={
          <div className="rounded-[12px] border border-neutral-dark-gray bg-neutral-gray/30 p-6">
            <p className="font-manrope text-neutral-offwhite">Loading technical skills...</p>
          </div>
        }
        errorFallback={
          <p className="font-manrope text-neutral-offwhite">Unable to load skills section right now.</p>
        }
        onLoadError={(error) => {
          // eslint-disable-next-line no-console
          console.error("[SkillsMicrofrontend] remote load failed", error);
        }}
      />
    </section>
  );
};

export default SkillsMicrofrontend;
