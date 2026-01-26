import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroSection from '../HeroSection';
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
    <HeroSection />
  </FeatureFlagsProvider>
);

describe('HeroSection', () => {
  it('renders the hero section', () => {
    render(wrapper);
    expect(screen.getByText(/hi, i am/i)).toBeInTheDocument();
    expect(screen.getByText(/Abhay Chadha/i)).toBeInTheDocument();
  });

  it('renders the hero description', () => {
    render(wrapper);
    expect(screen.getByText(/Staff Software Engineer in Bengaluru/)).toBeInTheDocument();
  });

  it('renders action buttons', () => {
    render(wrapper);
    expect(screen.getByText('Contact Me')).toBeInTheDocument();
  });

  it('renders social media buttons', () => {
    render(wrapper);
    const linkedinButton = screen.getByAltText('LinkedIn');
    const githubButton = screen.getByAltText('GitHub');
    expect(linkedinButton).toBeInTheDocument();
    expect(githubButton).toBeInTheDocument();
  });

  it('renders the portrait image', () => {
    render(wrapper);
    const portrait = screen.getByAltText('Abhay Chadha');
    expect(portrait).toBeInTheDocument();
  });
});
