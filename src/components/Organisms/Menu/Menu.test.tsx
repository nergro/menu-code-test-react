import { Menu } from './Menu';
import React from 'react';
import { renderComponent } from '../../../services/testUtils';
import { screen, fireEvent } from '@testing-library/react';
import { mockedMenu } from '../../../mocks/mockedMenu';

beforeEach(() => {
    renderComponent(<Menu data={mockedMenu} />);
});

test('should total price be 0 initially', () => {
    expect(screen.getByText('0€', { exact: false })).toBeInTheDocument();
});

test('should update total price according to selected dishes', () => {
    fireEvent.click(screen.getByRole('button', { name: 'Onion rings' }));
    expect(screen.getByText('3€', { exact: false })).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Chicken curry' }));
    expect(screen.getByText('8.5€', { exact: false })).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Chicken curry' }));
    expect(screen.getByText('3€', { exact: false })).toBeInTheDocument();
});
