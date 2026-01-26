import { render, screen } from '@testing-library/react';
import ContactSection from '../ContactSection';
import { FeatureFlagsProvider } from '@/providers/FeatureFlagsProvider';

const wrapper = (
  <FeatureFlagsProvider app="host">
    <ContactSection />
  </FeatureFlagsProvider>
);

describe('ContactSection', () => {
  it('renders the contact section', () => {
    render(wrapper);
    expect(screen.getByText(/Let's connect/i)).toBeInTheDocument();
  });

  it('renders contact information', () => {
    render(wrapper);
    expect(screen.getByText(/Say hello at/i)).toBeInTheDocument();
    expect(screen.getByText('abhay.chadha48@gmail.com')).toBeInTheDocument();
    expect(screen.getByText(/For more info, here's my/i)).toBeInTheDocument();
    expect(screen.getByText('resume')).toBeInTheDocument();
  });

  it('renders social media icons', () => {
    render(wrapper);
    expect(screen.getByAltText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByAltText('GitHub')).toBeInTheDocument();
    expect(screen.getByAltText('Twitter/X')).toBeInTheDocument();
    expect(screen.getByAltText('Instagram')).toBeInTheDocument();
  });

  it('renders contact form fields', () => {
    render(wrapper);
    expect(screen.getByPlaceholderText('John Doe')).toBeInTheDocument();
    const nameLabel = screen.getByText('Name');
    const emailLabel = screen.getByText('Email');
    const subjectLabel = screen.getByText('Subject');
    const messageLabel = screen.getByText('Message');
    expect(nameLabel).toBeInTheDocument();
    expect(emailLabel).toBeInTheDocument();
    expect(subjectLabel).toBeInTheDocument();
    expect(messageLabel).toBeInTheDocument();
  });

  it('renders submit button', () => {
    render(wrapper);
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });

  it('renders copyright notice', () => {
    render(wrapper);
    expect(screen.getByText(/© 2025 Abhay Chadha/)).toBeInTheDocument();
  });
});
