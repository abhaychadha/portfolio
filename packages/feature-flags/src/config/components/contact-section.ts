/** Feature flags for ContactSection. Page: contact. All on by default. */
export const contactSection = {
  component: 'ContactSection' as const,
  page: 'contact' as const,
  useCases: ['form', 'email', 'resume', 'socialLinks'] as const,
  defaults: { form: true, email: true, resume: true, socialLinks: true },
};
