import React, { useState } from 'react';
import styled from 'styled-components';
import menuData from '../../../menu-data.json';
import { MenuSection } from '../Molecules/MenuSection';
import {
    useDispatch as useGuestsDispatch,
    useState as useGuestsState,
} from '../../store/guestsStore/hooks';
import { NavigationButtons } from '../Molecules/NavigationButtons';

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

export const Menu = () => {
    const guestsState = useGuestsState();
    const [activeGuest, setActiveGuest] = useState(guestsState[0]);

    return (
        <Container>
            <Guests>
                {guestsState.map((guest) => (
                    <GuestButton
                        key={guest.id}
                        isActive={guest.id === activeGuest.id}
                        onClick={() => setActiveGuest(guest)}
                    >
                        {guest.name}
                    </GuestButton>
                ))}
            </Guests>
            {Object.keys(menuData).map((key) => (
                <MenuSection key={key} dishes={menuData[key]} title={key} />
            ))}
            <NavigationButtons />
        </Container>
    );
};
