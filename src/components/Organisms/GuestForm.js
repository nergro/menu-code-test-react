import React, { useState } from 'react';
import styled from 'styled-components';
import { Input } from '../Atoms/input/Input';
import { P } from '../Atoms/text/P';
import { NavigationButtons } from '../Molecules/NavigationButtons';
import { useDispatch as useGuestsDispatch } from '../../store/guestsStore/hooks';
import { useDispatch as useStepsDispatch } from '../../store/stepsStore/hooks';

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

export const GuestForm = () => {
    const [guests, setGuests] = useState({});
    const guestsDispatch = useGuestsDispatch();
    const stepsDispatch = useStepsDispatch();

    const onNext = () => {
        const guestsPayload = Object.keys(guests).map((key) => guests[key]);
        guestsDispatch({ type: 'Guests/AddGuests', payload: guestsPayload });
        stepsDispatch({ type: 'Step/Next' });
    };

    const onGuestChange = (guest, value) => {
        setGuests({
            ...guests,
            [guest]: { id: guest + value, name: value },
        });
    };

    return (
        <div>
            <P>Welcome! Please enter your names</P>
            <Form>
                <StyledInput
                    type="text"
                    placeholder="Guest 1"
                    onChange={(e) => onGuestChange('firstGuest', e.target.value)}
                />
                <StyledInput
                    type="text"
                    placeholder="Guest 2"
                    onChange={(e) => onGuestChange('secondGuest', e.target.value)}
                />
            </Form>
            <NavigationButtons onNext={onNext} />
        </div>
    );
};
