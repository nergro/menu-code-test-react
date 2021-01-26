import { Home } from './Home';
import { screen } from '@testing-library/react';
import React from 'react';
import { renderComponent } from '../../../services/testUtils';

test('Has the right title', () => {
    renderComponent(<Home />);
    const title = screen.getByText('Menu Test');
    expect(title).toBeInTheDocument();
});
