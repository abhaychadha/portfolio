/** Feature flags for AboutMeSection. Page: about. All on by default. */
export const aboutMeSection = {
  component: 'AboutMeSection' as const,
  page: 'about' as const,
  useCases: ['animation', 'ctaLink'] as const,
  defaults: { animation: true, ctaLink: true },
};
