import { Menu } from './Menu';
import React from 'react';
import { renderComponent } from '../../../services/testUtils';

test('Renders successfully', () => {
    renderComponent(<Menu />);
});
