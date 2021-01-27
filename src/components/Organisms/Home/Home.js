import React from 'react';
import { GuestForm } from '../../Molecules/GuestForm';
import { Menu } from '../Menu';
import { StepLayout } from '../../Molecules/StepLayout';

export const Home = () => {
    return (
        <StepLayout>
            <GuestForm />
            {/* <Menu /> */}
        </StepLayout>
    );
};
