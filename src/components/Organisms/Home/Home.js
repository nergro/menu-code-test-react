import React, { useState } from 'react';
import { GuestForm } from '../GuestForm';
import { Menu } from '../Menu';
import { StepLayout } from '../../Molecules/StepLayout';
import { useState as useStepState } from '../../../store/stepsStore/hooks';
export const Home = () => {
    const currentStep = useStepState();
    // const [guests, setGuests] = useState({});

    // const onGuestChange = (guest, value) => {
    //     setGuests({
    //         ...guests,
    //         [guest]: { id: guest + value, name: value },
    //     });
    // };

    return (
        <StepLayout>
            {currentStep === 'guestForm' && (
                <GuestForm
                // guests={guests} onGuestChange={onGuestChange}
                />
            )}
            {currentStep === 'menu' && <Menu />}
        </StepLayout>
    );
};
