import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutMeSection from '../AboutMeSection';
import { FeatureFlagsProvider } from '@/providers/FeatureFlagsProvider';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.ComponentProps<'div'>) => <div {...props}>{children}</div>,
  },
  useScroll: () => ({ scrollYProgress: 0 }),
  useTransform: () => 0,
}));

const wrapper = (
  <FeatureFlagsProvider app="host">
    <AboutMeSection />
  </FeatureFlagsProvider>
);

describe('AboutMeSection', () => {
  it('renders the about me section', () => {
    render(wrapper);
    const titles = screen.getAllByText(/About me/i);
    expect(titles.length).toBeGreaterThan(0);
  });

  it('renders the about description', () => {
    render(wrapper);
    const descriptions = screen.getAllByText(/Staff Software Engineer with 15 years/);
    expect(descriptions.length).toBeGreaterThan(0);
  });

  it('renders the more about me link', () => {
    render(wrapper);
    const link = screen.getByText('More about me');
    expect(link).toBeInTheDocument();
    expect(link.closest('a')).toHaveAttribute('href', '#about');
  });

  it('has correct data attributes', () => {
    const { container } = render(wrapper);
    const title = container.querySelector('[data-node-id="7:226"]');
    expect(title).toBeInTheDocument();
  });
});
