import React from 'react';
import { render, screen } from '@testing-library/react';
import FeaturedProjectsSection from '../FeaturedProjectsSection';
import { FeatureFlagsProvider } from '@/providers/FeatureFlagsProvider';

// Mock framer-motion - strip animation props to avoid React DOM warnings
jest.mock('framer-motion', () => ({
  motion: {
    div: ({
      children,
      initial,
      animate,
      exit,
      transition,
      whileInView,
      viewport,
      ...props
    }: React.ComponentProps<'div'> & Record<string, unknown>) => <div {...props}>{children}</div>,
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
    expect(screen.getByText('Work Experience')).toBeInTheDocument();
  });

  it('renders the section description', () => {
    render(wrapper);
    expect(screen.getByText(/A journey through innovation/)).toBeInTheDocument();
  });

  it('renders multiple projects', () => {
    render(wrapper);
    expect(screen.getByText(/Staff Software Engineer/)).toBeInTheDocument();
    expect(screen.getByText(/Software Development Engineer III/)).toBeInTheDocument();
    expect(screen.getByText(/Lead Software Engineer/)).toBeInTheDocument();
  });

  it('renders key sections on cards', () => {
    render(wrapper);
    expect(screen.getAllByText('Key Achievements').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Technologies Used').length).toBeGreaterThan(0);
  });
});
