import React from 'react';
import styled from 'styled-components';
import { Button } from '../Atoms/Button';

const Buttons = styled.div`
    margin: 30px 0;
    display: flex;
    justify-content: center;
`;

const BackButton = styled(Button)`
    margin-right: 10px;
    background: ${(props) => props.theme.colors.accents.secondary};

    &:hover:enabled {
        opacity: 0.8;
    }
`;

const NextButton = styled(Button)`
    &:hover:enabled {
        opacity: 0.8;
    }
`;
export const NavigationButtons = ({ onNext, onPrevious }) => {
    return (
        <Buttons>
            <BackButton onClick={onPrevious} disabled={!onPrevious}>
                Back
            </BackButton>
            <NextButton onClick={onNext} disabled={!onNext}>
                Next
            </NextButton>
        </Buttons>
    );
};
