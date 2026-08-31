import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookingSection from './BookingSection';

// Mock matchMedia which is required by react-day-picker
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});


const mockDict = {
  title: "Mock Title",
  subtitle: "Mock Subtitle",
  formTitle: "Mock Form Title",
  labels: {
    name: "Name",
    email: "Email",
    checkin: "Checkin",
    checkout: "Checkout",
    message: "Message"
  },
  placeholders: {
    message: "Any special requests or questions?"
  },
  button: {
    idle: "Send Inquiry",
    sending: "Sending..."
  },
  messages: {
    success: "Thanks",
    error: "Failed to send: ",
    unexpected: "An unexpected error occurred. Please try again.",
    noDates: "Please select your desired dates on the calendar first!"
  }
};


describe('BookingSection', () => {
  beforeEach(() => {
    vi.spyOn(window, 'alert').mockImplementation(() => {});
  });

  it('shows an alert when trying to submit without dates', async () => {
    const user = userEvent.setup();
    render(<BookingSection blockedDates={[]} dict={mockDict} />);
    
    // Fill required HTML5 fields to pass validation
    const nameInput = screen.getByLabelText(/Name/i);
    const emailInput = screen.getByLabelText(/Email/i);
    
    await user.type(nameInput, 'John Doe');
    await user.type(emailInput, 'john@example.com');
    
    const submitBtn = screen.getByRole('button', { name: /Send Inquiry/i });
    await user.click(submitBtn);

    expect(window.alert).toHaveBeenCalledWith("Please select your desired dates on the calendar first!");
  });
});
