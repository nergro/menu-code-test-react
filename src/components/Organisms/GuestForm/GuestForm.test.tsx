import { GuestForm, errorMessage } from './GuestForm';
import React from 'react';
import { renderComponent } from '../../../services/testUtils';
import { screen, fireEvent } from '@testing-library/react';
import { initialState } from '../../../store/guestsStore/provider';

beforeEach(() => {
    renderComponent(<GuestForm guestsOrder={initialState.order} guests={initialState.guests} />);
});

test('should have correct amount of inputs', () => {
    const inputs = screen.getAllByPlaceholderText('Guest', { exact: false });

    expect(inputs.length).toBe(initialState.order.length);
});

test('should show error if guests names are empty', () => {
    const nextButton = screen.getByRole('button', { name: 'Next' });
    fireEvent.click(nextButton);

    expect(screen.getByText(errorMessage)).toBeInTheDocument();
});

test('should show error if guests names are too short', () => {
    const [firstGuestInput, secondGuestInput] = screen.getAllByPlaceholderText('Guest', {
        exact: false,
    });
    const nextButton = screen.getByRole('button', { name: 'Next' });

    fireEvent.change(firstGuestInput, { target: { value: 'John' } });
    fireEvent.change(secondGuestInput, { target: { value: 'J' } });
    fireEvent.click(nextButton);

    expect(screen.getByText(errorMessage)).toBeInTheDocument();
});
