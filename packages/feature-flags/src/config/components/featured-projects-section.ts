/** Feature flags for FeaturedProjectsSection. Page: projects. All on by default. */
export const featuredProjectsSection = {
  component: 'FeaturedProjectsSection' as const,
  page: 'projects' as const,
  useCases: ['headerAnimation', 'projectCardAnimation'] as const,
  defaults: { headerAnimation: true, projectCardAnimation: true },
};
