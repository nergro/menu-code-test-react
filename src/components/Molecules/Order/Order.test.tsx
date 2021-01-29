import { Order } from './Order';
import React from 'react';
import { renderComponent } from '../../../services/testUtils';
import { screen } from '@testing-library/react';
import { mockedGuests } from '../../../mocks/mockedGuests';

const guest = mockedGuests[1];

beforeEach(() => {
    renderComponent(<Order guest={guest} />);
});

test('should display guest name', () => {
    expect(screen.getByText(guest.name)).toBeInTheDocument();
});

test('should render a list with 3 guest dishes', () => {
    const listElement = screen.getByRole('list');
    const listElements = screen.getAllByRole('listitem');
    expect(listElement).toBeInTheDocument();
    expect(listElements.length).toEqual(3);
});

test('should display order sum', () => {
    expect(screen.getByText(guest.totalSum, { exact: false })).toBeInTheDocument();
});
