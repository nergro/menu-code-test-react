import React from 'react';
import styled from 'styled-components';
import { H1 } from '../Atoms/text/H';
import { Button } from '../Atoms/Button';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const NavigationButtons = styled.div`
    margin: 30px 0;
`;

const BackButton = styled(Button)`
    margin-right: 10px;
    background: ${(props) => props.theme.colors.accents.secondary};

    &:hover {
        opacity: 0.8;
    }
`;

const NextButton = styled(Button)`
    &:hover {
        opacity: 0.8;
    }
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
            <NavigationButtons>
                <BackButton>Back</BackButton>
                <NextButton>Next</NextButton>
            </NavigationButtons>
        </Container>
    );
};
