import React, { FC } from 'react';
import { P } from '../Atoms/text/P';
import { NavigationButtons } from './NavigationButtons';
import { useDispatch as useGuestsDispatch } from '../../store/guestsStore/hooks';
import { useDispatch as useStepsDispatch } from '../../store/stepsStore/hooks';

export const OrderComplete: FC = () => {
    const guestsDispatch = useGuestsDispatch();
    const stepsDispatch = useStepsDispatch();

    return (
        <>
            <P>Thank You! Your order was received.</P>
            <NavigationButtons
                nextLabel="Start fresh"
                onNext={() => {
                    guestsDispatch({ type: 'Guests/Reset' });
                    stepsDispatch({ type: 'Step/Reset' });
                }}
            />
        </>
    );
};
