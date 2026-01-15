import { render, screen } from '@testing-library/react';
import ContactSection from '../ContactSection';

describe('ContactSection', () => {
  it('renders the contact section', () => {
    render(<ContactSection />);
    expect(screen.getByText(/Let's connect/i)).toBeInTheDocument();
  });

  it('renders contact information', () => {
    render(<ContactSection />);
    expect(screen.getByText(/Say hello at/i)).toBeInTheDocument();
    expect(screen.getByText('robertgarcia@gmail.com')).toBeInTheDocument();
    expect(screen.getByText(/For more info, here's my/i)).toBeInTheDocument();
    expect(screen.getByText('resume')).toBeInTheDocument();
  });

  it('renders social media icons', () => {
    render(<ContactSection />);
    expect(screen.getByAltText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByAltText('GitHub')).toBeInTheDocument();
    expect(screen.getByAltText('Twitter/X')).toBeInTheDocument();
    expect(screen.getByAltText('Instagram')).toBeInTheDocument();
  });

  it('renders contact form fields', () => {
    render(<ContactSection />);
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
    render(<ContactSection />);
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });

  it('renders copyright notice', () => {
    render(<ContactSection />);
    expect(screen.getByText(/© 2023 Robert Garcia/)).toBeInTheDocument();
  });
});
