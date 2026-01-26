/** Feature flags for HeroSection. Page: home. All on by default. */
export const heroSection = {
  component: 'HeroSection' as const,
  page: 'home' as const,
  useCases: ['animation', 'socialLinks', 'primaryCta', 'portrait'] as const,
  defaults: { animation: true, socialLinks: true, primaryCta: true, portrait: true },
};
