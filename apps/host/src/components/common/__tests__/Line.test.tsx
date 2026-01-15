import { render, screen } from '@testing-library/react';
import Line from '../Line';

describe('Line', () => {
  it('renders the line component', () => {
    const { container } = render(<Line />);
    const lineContainer = container.querySelector('[data-node-id="7:77"]');
    expect(lineContainer).toBeInTheDocument();
  });

  it('renders the line image', () => {
    const { container } = render(<Line />);
    const image = container.querySelector('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/assets/images/decorative/line-4.svg');
  });

  it('has correct data attributes', () => {
    const { container } = render(<Line />);
    const line = container.querySelector('[data-node-id="7:77"]');
    expect(line).toBeInTheDocument();
  });

  it('has correct dimensions', () => {
    const { container } = render(<Line />);
    const image = container.querySelector('img');
    expect(image).toHaveAttribute('width', '1320');
    expect(image).toHaveAttribute('height', '1');
  });
});
