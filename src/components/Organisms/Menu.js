import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import menuData from '../../../menu-data.json';
import { MenuSection } from '../Molecules/MenuSection';
import {
    useState as useGuestsState,
    useDispatch as useGuestsDispatch,
} from '../../store/guestsStore/hooks';
import { NavigationButtons } from '../Molecules/NavigationButtons';
import { useDispatch as useStepsDispatch } from '../../store/stepsStore/hooks';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Guests = styled.div`
    display: flex;
    justify-content: center;
`;

const GuestButton = styled.button`
    border: none;
    background: none;
    padding: 5px;
    font: ${(props) => props.theme.fonts.mediumTextSemiBold};
    color: ${(props) =>
        props.isActive ? props.theme.colors.accents.primary : props.theme.colors.accents.secondary};
    cursor: pointer;
    transition: all 0.3s ease;
    outline: none;

    &:not(:last-child) {
        margin-right: 10px;
    }

    &:hover {
        opacity: 0.8;
    }
`;

const errorMessage = 'You must have at least two courses, one of which must be a main.';

export const Menu = () => {
    const [error, setError] = useState('');
    const guestsState = useGuestsState();
    const stepsDispatch = useStepsDispatch();
    const guestsDispatch = useGuestsDispatch();

    const orderedGuests = guestsState.order.map((id) => guestsState.guests[id]);
    const activeGuest = guestsState.guests[guestsState.activeGuest];

    const onNextGuest = (guestId) => {
        const dishesArr = Object.keys(activeGuest.dishes).map((key) => activeGuest.dishes[key]);

        if (dishesArr.length >= 2 && dishesArr.some((x) => x.type === 'mains')) {
            guestsDispatch({
                type: 'Guests/SetActiveGuest',
                payload: { guestId },
            });
            setError('');
        } else {
            setError(errorMessage);
        }
    };

    const onPreviousGuest = () =>
        guestsState.activeGuest === 1
            ? stepsDispatch({ type: 'Step/Previous' })
            : guestsDispatch({
                  type: 'Guests/SetActiveGuest',
                  payload: { guestId: guestsState.activeGuest - 1 },
              });

    return (
        <Container>
            <Guests>
                {orderedGuests.map((guest) => (
                    <GuestButton
                        key={guest.id}
                        isActive={guest.id === guestsState.activeGuest}
                        onClick={() => onNextGuest(guest.id)}
                    >
                        {guest.name}
                    </GuestButton>
                ))}
            </Guests>
            {Object.keys(menuData).map((key) => (
                <MenuSection key={key} dishes={menuData[key]} type={key} />
            ))}
            <NavigationButtons
                onPrevious={onPreviousGuest}
                error={error || activeGuest.error}
                onNext={() => onNextGuest(guestsState.activeGuest + 1)}
            />
        </Container>
    );
};
