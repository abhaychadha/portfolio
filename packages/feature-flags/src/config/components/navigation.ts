/** Feature flags for Navigation. App-level (no page). All on by default. */
export const navigation = {
  component: 'Navigation' as const,
  page: undefined as undefined,
  useCases: ['themeToggle', 'links'] as const,
  defaults: { themeToggle: true, links: true },
};
