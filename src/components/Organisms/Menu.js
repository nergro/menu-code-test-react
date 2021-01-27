import React, { Fragment } from 'react';
import styled from 'styled-components';
import menuData from '../../../menu-data.json';
import { MenuSection } from '../Molecules/MenuSection';

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

    &:not(:last-child) {
        margin-right: 10px;
    }

    &:hover {
        opacity: 0.8;
    }
`;

export const Menu = () => {
    const guests = ['John', 'Jessica'];
    return (
        <Container>
            <Guests>
                {guests.map((guest, i) => (
                    <GuestButton key={guest + i} isActive={i % 2 === 0}>
                        {guest}
                    </GuestButton>
                ))}
            </Guests>
            {Object.keys(menuData).map((key) => (
                <MenuSection key={key} dishes={menuData[key]} title={key} />
            ))}
        </Container>
    );
};
