import { render, screen } from '@testing-library/react';
import HeroSection from '../HeroSection';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  useScroll: () => ({ scrollYProgress: 0 }),
  useTransform: () => 0,
}));

describe('HeroSection', () => {
  it('renders the hero section', () => {
    render(<HeroSection />);
    expect(screen.getByText(/hi, i am/i)).toBeInTheDocument();
    expect(screen.getByText(/robert garcia/i)).toBeInTheDocument();
  });

  it('renders the hero description', () => {
    render(<HeroSection />);
    expect(screen.getByText(/Sydney based front-end developer/)).toBeInTheDocument();
  });

  it('renders action buttons', () => {
    render(<HeroSection />);
    expect(screen.getByText('Contact Me')).toBeInTheDocument();
  });

  it('renders social media buttons', () => {
    render(<HeroSection />);
    const linkedinButton = screen.getByAltText('LinkedIn');
    const githubButton = screen.getByAltText('GitHub');
    expect(linkedinButton).toBeInTheDocument();
    expect(githubButton).toBeInTheDocument();
  });

  it('renders the portrait image', () => {
    render(<HeroSection />);
    const portrait = screen.getByAltText('Robert Garcia');
    expect(portrait).toBeInTheDocument();
  });
});
