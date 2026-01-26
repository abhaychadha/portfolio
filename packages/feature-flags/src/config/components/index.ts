/**
 * Per-component feature flag configs. All defaults on.
 * Values live only here; consumed via getComponentFlags.
 */

export { navigation } from './navigation';
export { line } from './line';
export { heroSection } from './hero-section';
export { aboutMeSection } from './about-me-section';
export { featuredProjectsSection } from './featured-projects-section';
export { projectDetail } from './project-detail';
export { projectCard } from './project-card';
export { contactSection } from './contact-section';

import { navigation } from './navigation';
import { line } from './line';
import { heroSection } from './hero-section';
import { aboutMeSection } from './about-me-section';
import { featuredProjectsSection } from './featured-projects-section';
import { projectDetail } from './project-detail';
import { projectCard } from './project-card';
import { contactSection } from './contact-section';

const configs = [
  navigation,
  line,
  heroSection,
  aboutMeSection,
  featuredProjectsSection,
  projectDetail,
  projectCard,
  contactSection,
];

/** Registry: component id -> { page?, useCases, defaults } */
export const componentRegistry = Object.fromEntries(
  configs.map((c) => [
    c.component,
    { page: c.page, useCases: c.useCases, defaults: c.defaults },
  ])
);
