import React from 'react';
import styled from 'styled-components';
import { H1 } from '../../Atoms/text/H';
import { P } from '../../Atoms/text/P';
import { GuestForm } from '../../Molecules/GuestForm';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Home = () => {
    return (
        <Container>
            <H1 weight="500">OT Menu</H1>
            <P>Welcome! Please enter your names</P>
            <GuestForm />
        </Container>
    );
};
