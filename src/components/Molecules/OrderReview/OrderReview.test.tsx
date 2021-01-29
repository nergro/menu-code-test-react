import { OrderReview } from './OrderReview';
import React from 'react';
import { renderComponent } from '../../../services/testUtils';
import { screen } from '@testing-library/react';
import { mockedGuests } from '../../../mocks/mockedGuests';

beforeEach(() => {
    renderComponent(<OrderReview guestsOrder={[1, 2]} guests={mockedGuests} />);
});

test('should total price be calculated correctly', () => {
    expect(screen.getByText('36€', { exact: false })).toBeInTheDocument();
});
