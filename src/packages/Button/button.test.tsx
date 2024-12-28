import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '.';

describe('Button Component', () => {
  it('renders the button with the correct label', () => {
    render(<Button label="Click Me" onClick={() => {}} />);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('calls the onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button label="Click Me" onClick={handleClick} />);
    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies the correct variant class', () => {
    // Test for the primary variant
    render(<Button label="Primary" onClick={() => {}} variant="primary" />);
    const primaryButton = screen.getByText('Primary');
    expect(primaryButton).toHaveClass('btn');
    expect(primaryButton).toHaveClass('btn_primary'); // Expect the primary class

    // Test for the secondary variant
    render(<Button label="Secondary" onClick={() => {}} variant="secondary" />);
    const secondaryButton = screen.getByText('Secondary');
    expect(secondaryButton).toHaveClass('btn');
    expect(secondaryButton).toHaveClass('btn_secondary'); // Expect the secondary class
  });

  it('disables the button when disabled prop is true', () => {
    render(<Button label="Disabled" onClick={() => {}} disabled />);
    const button = screen.getByText('Disabled');
    expect(button).toBeDisabled();
  });
});
