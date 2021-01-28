import React, { FC } from 'react';
import { GuestForm } from '../GuestForm';
import { Menu } from '../Menu';
import { StepLayout } from '../../Molecules/StepLayout';
import { useState as useStepState } from '../../../store/stepsStore/hooks';
import { OrderReview } from '../OrderReview';
import { OrderComplete } from '../../Molecules/OrderComplete';

export const Home: FC = () => {
    const currentStep = useStepState();
    return (
        <StepLayout>
            {currentStep === 'guestForm' && <GuestForm />}
            {currentStep === 'menu' && <Menu />}
            {currentStep === 'orderReview' && <OrderReview />}
            {currentStep === 'orderComplete' && <OrderComplete />}
        </StepLayout>
    );
};
