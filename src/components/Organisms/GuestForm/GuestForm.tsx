import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Input } from '../../Atoms/Input';
import { P } from '../../Atoms/text/P';
import { NavigationButtons } from '../../Molecules/NavigationButtons';
import { useDispatch as useGuestsDispatch } from '../../../store/guestsStore/hooks';
import { useDispatch as useStepsDispatch } from '../../../store/stepsStore/hooks';
import { getArray } from '../../../services/getArray';
import { Guests } from '../../../types/guest';

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

export const errorMessage = 'Please enter valid names for all guests';

interface Props {
    guests: Guests;
    guestsOrder: number[];
}

export const GuestForm: FC<Props> = ({ guests, guestsOrder }) => {
    const [error, setError] = useState('');

    const guestsDispatch = useGuestsDispatch();
    const stepsDispatch = useStepsDispatch();

    const onNext = (): void => {
        const everyGuestHasProperName = getArray(guests).every((guest) => guest.name.length > 2);
        if (everyGuestHasProperName) {
            stepsDispatch({ type: 'Step/Next' });
        } else {
            setError(errorMessage);
        }
    };

    const onGuestChange = (guestId: number, name: string): void =>
        guestsDispatch({ type: 'Guests/Guest/UpdateName', payload: { guestId, name } });

    return (
        <>
            <P>Welcome! Please enter your names</P>
            <Form>
                {guestsOrder.map((x) => (
                    <StyledInput
                        key={x}
                        type="text"
                        placeholder={`Guest ${x}`}
                        onChange={(e) => onGuestChange(x, e.target.value)}
                        value={guests[x].name}
                    />
                ))}
            </Form>
            <NavigationButtons onNext={onNext} error={error} previousDisabled />
        </>
    );
};
