import React from 'react';
import { GuestForm } from '../GuestForm';
import { Menu } from '../Menu';
import { StepLayout } from '../../Molecules/StepLayout';
import { useState as useStepState } from '../../../store/stepsStore/hooks';
export const Home = () => {
    const currentStep = useStepState();
    console.log(currentStep);
    return (
        <StepLayout>
            {currentStep === 'guestForm' && <GuestForm />}
            {currentStep === 'menu' && <Menu />}
        </StepLayout>
    );
};
