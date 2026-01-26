/** Feature flags for ProjectCard. Page: projects. All on by default. */
export const projectCard = {
  component: 'ProjectCard' as const,
  page: 'projects' as const,
  useCases: ['tag', 'image'] as const,
  defaults: { tag: true, image: true },
};
