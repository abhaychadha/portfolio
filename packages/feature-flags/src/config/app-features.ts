/** App-level features (no page). All on by default. */
export const appFeatures = {
  useCases: ['smoothScroll', 'sectionSeparators'] as const,
  defaults: { smoothScroll: true, sectionSeparators: true },
};
