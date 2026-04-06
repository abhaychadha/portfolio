import { render } from '@testing-library/react';
import Line from '../Line';
import { IMAGES } from '@portfolio/content';

describe('Line', () => {
  it('renders the line component', () => {
    const { container } = render(<Line src={IMAGES.decorative.line4} />);
    const lineContainer = container.querySelector('[data-node-id="7:77"]');
    expect(lineContainer).toBeInTheDocument();
  });

  it('renders the line image', () => {
    const { container } = render(<Line src={IMAGES.decorative.line4} />);
    const image = container.querySelector('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', expect.stringContaining('line-4'));
  });

  it('has correct data attributes', () => {
    const { container } = render(<Line src={IMAGES.decorative.line4} />);
    const line = container.querySelector('[data-node-id="7:77"]');
    expect(line).toBeInTheDocument();
  });

  it('has line height class', () => {
    const { container } = render(<Line src={IMAGES.decorative.line4} />);
    const image = container.querySelector('img');
    expect(image).toHaveClass('h-full');
  });
});
