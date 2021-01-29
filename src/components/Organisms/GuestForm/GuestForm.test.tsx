import { GuestForm, errorMessage } from './GuestForm';
import React from 'react';
import { renderComponent } from '../../../services/testUtils';
import { screen, fireEvent } from '@testing-library/react';

beforeEach(() => {
    renderComponent(<GuestForm />);
});

const getGuestsInputs = (): HTMLElement[] => {
    const firstGuestInput = screen.getByPlaceholderText('Guest 1');
    const secondGuestInput = screen.getByPlaceholderText('Guest 2');

    return [firstGuestInput, secondGuestInput];
};

test('should have 2 inputs', () => {
    const [firstGuestInput, secondGuestInput] = getGuestsInputs();

    expect(firstGuestInput).toBeInTheDocument();
    expect(secondGuestInput).toBeInTheDocument();
});

test('should show error if guests names are empty', () => {
    const nextButton = screen.getByRole('button', { name: 'Next' });
    fireEvent.click(nextButton);

    expect(screen.getByText(errorMessage)).toBeInTheDocument();
});

test('should show error if guests names are too short', () => {
    const [firstGuestInput, secondGuestInput] = getGuestsInputs();
    const nextButton = screen.getByRole('button', { name: 'Next' });

    fireEvent.change(firstGuestInput, { target: { value: 'John' } });
    fireEvent.change(secondGuestInput, { target: { value: 'J' } });
    fireEvent.click(nextButton);

    expect(screen.getByText(errorMessage)).toBeInTheDocument();
});
