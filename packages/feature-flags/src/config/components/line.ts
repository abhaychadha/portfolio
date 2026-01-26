/** Feature flags for Line. App-level (no page). All on by default. */
export const line = {
  component: 'Line' as const,
  page: undefined as undefined,
  useCases: ['visible'] as const,
  defaults: { visible: true },
};
