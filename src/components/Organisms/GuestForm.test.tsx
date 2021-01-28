import { GuestForm } from './GuestForm';
import React from 'react';
import { renderComponent } from '../../services/testUtils';

test('Renders without error', () => {
    renderComponent(<GuestForm />);
});
