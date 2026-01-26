import React from 'react';
import { render, screen } from '@testing-library/react';
import FeaturedProjectsSection from '../FeaturedProjectsSection';
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
    <FeaturedProjectsSection />
  </FeatureFlagsProvider>
);

describe('FeaturedProjectsSection', () => {
  it('renders the featured projects section', () => {
    render(wrapper);
    expect(screen.getByText('Featured Projects')).toBeInTheDocument();
  });

  it('renders the section description', () => {
    render(wrapper);
    expect(screen.getByText(/Selected initiatives from 15\+ years/)).toBeInTheDocument();
  });

  it('renders multiple projects', () => {
    render(wrapper);
    expect(screen.getByText(/Walmart Plus & Sam's Club membership platform/)).toBeInTheDocument();
    expect(screen.getByText(/Sixt mobile check-in & micro-frontend platform/)).toBeInTheDocument();
    expect(screen.getByText(/Lowe's search & product listing/)).toBeInTheDocument();
  });

  it('renders project links', () => {
    render(wrapper);
    expect(screen.getAllByText('Live Demo').length).toBeGreaterThan(0);
    expect(screen.getAllByText('See on Github').length).toBeGreaterThan(0);
    expect(screen.getByText('View project')).toBeInTheDocument();
  });
});
