import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Input } from '../Atoms/Input';
import { P } from '../Atoms/text/P';
import { NavigationButtons } from '../Molecules/NavigationButtons';
import {
    useDispatch as useGuestsDispatch,
    useState as useGuestsState,
} from '../../store/guestsStore/hooks';
import { useDispatch as useStepsDispatch } from '../../store/stepsStore/hooks';
import { getArray } from '../../services/getArray';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    max-width: 300px;
    margin: 30px auto 0;
`;

const StyledInput = styled(Input)`
    margin-bottom: 8px;
`;

export const GuestForm: FC = () => {
    const [error, setError] = useState('');

    const guestsDispatch = useGuestsDispatch();
    const guestsState = useGuestsState();
    const stepsDispatch = useStepsDispatch();

    const onNext = (): void => {
        const everyGuestHasProperName = getArray(guestsState.guests).every(
            (guest) => guest.name.length > 2
        );
        if (everyGuestHasProperName) {
            stepsDispatch({ type: 'Step/Next' });
        } else {
            setError('Please enter valid names for all guests');
        }
    };

    const onGuestChange = (guestId: number, name: string): void =>
        guestsDispatch({ type: 'Guests/Guest/UpdateName', payload: { guestId, name } });

    return (
        <div>
            <P>Welcome! Please enter your names</P>
            <Form>
                <StyledInput
                    type="text"
                    placeholder="Guest 1"
                    onChange={(e) => onGuestChange(1, e.target.value)}
                    value={guestsState.guests[1].name}
                />
                <StyledInput
                    type="text"
                    placeholder="Guest 2"
                    onChange={(e) => onGuestChange(2, e.target.value)}
                    value={guestsState.guests[2].name}
                />
            </Form>
            <NavigationButtons onNext={onNext} error={error} previousDisabled />
        </div>
    );
};
