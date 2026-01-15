import { render, screen } from '@testing-library/react';
import FeaturedProjectsSection from '../FeaturedProjectsSection';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  useScroll: () => ({ scrollYProgress: 0 }),
  useTransform: () => 0,
}));

describe('FeaturedProjectsSection', () => {
  it('renders the featured projects section', () => {
    render(<FeaturedProjectsSection />);
    expect(screen.getByText('Featured Projects')).toBeInTheDocument();
  });

  it('renders the section description', () => {
    render(<FeaturedProjectsSection />);
    expect(screen.getByText(/Here are some of the selected projects/)).toBeInTheDocument();
  });

  it('renders multiple projects', () => {
    render(<FeaturedProjectsSection />);
    // Check for project titles
    expect(screen.getByText('Promotional landing page for our favorite show')).toBeInTheDocument();
    expect(screen.getByText('Blog site for World News')).toBeInTheDocument();
    expect(screen.getByText('E-commerce product page')).toBeInTheDocument();
  });

  it('renders project links', () => {
    render(<FeaturedProjectsSection />);
    expect(screen.getAllByText('Live Demo').length).toBeGreaterThan(0);
    expect(screen.getAllByText('See on Github').length).toBeGreaterThan(0);
    expect(screen.getByText('View project')).toBeInTheDocument();
  });
});
