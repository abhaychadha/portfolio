import { render, screen } from '@testing-library/react';
import AboutMeSection from '../AboutMeSection';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  useScroll: () => ({ scrollYProgress: 0 }),
  useTransform: () => 0,
}));

describe('AboutMeSection', () => {
  it('renders the about me section', () => {
    render(<AboutMeSection />);
    const titles = screen.getAllByText(/About me/i);
    expect(titles.length).toBeGreaterThan(0);
  });

  it('renders the about description', () => {
    render(<AboutMeSection />);
    const descriptions = screen.getAllByText(/I am a front-end developer based in Sydney/);
    expect(descriptions.length).toBeGreaterThan(0);
  });

  it('renders the more about me link', () => {
    render(<AboutMeSection />);
    const link = screen.getByText('More about me');
    expect(link).toBeInTheDocument();
    expect(link.closest('a')).toHaveAttribute('href', '#about');
  });

  it('has correct data attributes', () => {
    const { container } = render(<AboutMeSection />);
    const title = container.querySelector('[data-node-id="7:226"]');
    expect(title).toBeInTheDocument();
  });
});
