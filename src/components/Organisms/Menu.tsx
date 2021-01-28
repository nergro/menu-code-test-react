import React, { FC } from 'react';
import styled from 'styled-components';
import menuDataJSON from '../../../menu-data.json';
import { MenuSection } from '../Molecules/MenuSection';
import {
    useState as useGuestsState,
    useDispatch as useGuestsDispatch,
} from '../../store/guestsStore/hooks';
import { NavigationButtons } from '../Molecules/NavigationButtons';
import { useDispatch as useStepsDispatch } from '../../store/stepsStore/hooks';
import { MenuData } from '../../types/dish';
import { TotalGuestsOrderPrice } from '../Molecules/TotalGuestsOrderPrice';
import { orderIncludesEnoughDishes } from '../../services/menuRestrictions';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Guests = styled.div`
    display: flex;
    justify-content: center;
`;

interface GuestButtonProps {
    isActive?: boolean;
}

const GuestButton = styled.button<GuestButtonProps>`
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

export const Menu: FC = () => {
    const menuData: MenuData = Object.assign(new MenuData(), menuDataJSON);

    const guestsState = useGuestsState();
    const stepsDispatch = useStepsDispatch();
    const guestsDispatch = useGuestsDispatch();

    const orderedGuests = guestsState.order.map((id) => guestsState.guests[id]);
    const activeGuest = guestsState.guests[guestsState.activeGuest];

    const moveForward = (guestId: number): void =>
        guestsState.activeGuest === guestsState.order.length
            ? stepsDispatch({ type: 'Step/Next' })
            : guestsDispatch({
                  type: 'Guests/SetActiveGuest',
                  payload: { guestId },
              });

    const onNextGuest = (guestId: number): void => {
        if (orderIncludesEnoughDishes(activeGuest.dishes)) {
            moveForward(guestId);
            guestsDispatch({
                type: 'Guests/Guest/SetError',
                payload: { guestId: guestsState.activeGuest, error: '' },
            });
        } else {
            guestsDispatch({
                type: 'Guests/Guest/SetError',
                payload: {
                    guestId: guestsState.activeGuest,
                    error: 'You must have at least two courses, one of which must be a main.',
                },
            });
        }
    };

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
            <TotalGuestsOrderPrice />
            <NavigationButtons
                error={activeGuest.error}
                onNext={() => onNextGuest(guestsState.activeGuest + 1)}
            />
        </Container>
    );
};
