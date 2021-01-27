import React from 'react';
import styled from 'styled-components';
import { H1 } from '../Atoms/text/H';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const Content = styled.div`
    width: 95%;
    margin: 0 auto;
`;
export const StepLayout = ({ children }) => {
    return (
        <Container>
            <H1 weight="500">OT Menu</H1>
            <Content>{children}</Content>
        </Container>
    );
};
