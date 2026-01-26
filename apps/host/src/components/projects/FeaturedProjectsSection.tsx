'use client';

import { FC } from "react";
import { motion } from "framer-motion";
import { projectsConfig } from "@portfolio/content";
import { useComponentFlags } from "@/providers/FeatureFlagsProvider";
import ProjectDetail from "./ProjectDetail";

const FeaturedProjectsSection: FC = () => {
  const { title, subtitle, projects } = projectsConfig;
  const flags = useComponentFlags('FeaturedProjectsSection');
  const headerAnimation = flags.headerAnimation ?? true;
  const projectCardAnimation = flags.projectCardAnimation ?? true;

  const HeaderWrapper = headerAnimation ? motion.div : 'div';
  const headerMotionProps = headerAnimation
    ? {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
      }
    : {};

  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-20 lg:gap-[80px] items-start max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[60px] py-12 sm:py-14 md:py-16 lg:py-20 xl:py-[80px]" data-node-id="7:80">
      <HeaderWrapper
        className="flex flex-col gap-2 sm:gap-[8px] items-start w-full max-w-full md:max-w-[500px] lg:max-w-[600px]"
        {...headerMotionProps}
        data-node-id="7:81"
      >
        <p className="font-bebas leading-none text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[76px] text-foreground" data-node-id="7:82">
          {title}
        </p>
        <p className="font-manrope font-normal leading-[1.5] text-neutral-offwhite text-base sm:text-[18px] w-full" data-node-id="7:83">
          {subtitle}
        </p>
      </HeaderWrapper>
      <div className="flex flex-col gap-16 sm:gap-20 md:gap-24 lg:gap-[120px] items-start w-full" data-name="projects" data-node-id="7:84">
        {projects.map((project, index) =>
          projectCardAnimation ? (
            <motion.div
              key={project.id}
              className="w-full min-w-0"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <ProjectDetail {...project} />
            </motion.div>
          ) : (
            <div key={project.id} className="w-full min-w-0">
              <ProjectDetail {...project} />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default FeaturedProjectsSection;
