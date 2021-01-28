import React,{FC} from 'react';
import styled from 'styled-components';
import { Button } from '../Atoms/Button';
import { P } from '../Atoms/text/P';

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

const StyledP = styled(P)`
    margin-bottom: 15px;
`;

interface Props {
onNext: () => void;
onPrevious?: () => void;
error?: string;
}

export const NavigationButtons:FC<Props> = ({ onNext, onPrevious, error }) => {
    return (
        <>
            {error && <StyledP color="error">{error}</StyledP>}
            <Buttons>
                <BackButton onClick={onPrevious} disabled={!onPrevious}>
                    Back
                </BackButton>
                <NextButton onClick={onNext}>Next</NextButton>
            </Buttons>
        </>
    );
};
