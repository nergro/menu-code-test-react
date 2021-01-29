import { MenuSection } from './MenuSection';
import React from 'react';
import { renderComponent } from '../../../services/testUtils';
import { DishDTO } from '../../../types/dish';
import { screen } from '@testing-library/react';

const mockedDishes: DishDTO[] = [
    {
        id: 1,
        name: 'Onion rings',
        price: 3,
    },
    {
        id: 2,
        name: 'Bruschetta',
        price: 4.5,
    },
];

beforeEach(() => {
    renderComponent(<MenuSection type="starters" dishes={mockedDishes} />);
});

test('should render course type capitalized', () => {
    expect(screen.getByText('Starters')).toBeInTheDocument();
});

test('should render all course buttons', () => {
    expect(screen.getAllByRole('button')).toHaveLength(2);
});
