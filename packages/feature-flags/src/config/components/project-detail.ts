/** Feature flags for ProjectDetail. Page: projects. All on by default. */
export const projectDetail = {
  component: 'ProjectDetail' as const,
  page: 'projects' as const,
  useCases: ['links', 'tag', 'image'] as const,
  defaults: { links: false, tag: true, image: true },
};
