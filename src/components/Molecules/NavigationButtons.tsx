import React, { FC } from 'react';
import styled from 'styled-components';
import { Button } from '../Atoms/Button';
import { P } from '../Atoms/text/P';
import { useDispatch as useStepsDispatch } from '../../store/stepsStore/hooks';

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
    onNext?: () => void;
    onPrevious?: () => void;
    error?: string;
    nextLabel?: string;
}

export const NavigationButtons: FC<Props> = ({ onNext, onPrevious, error, nextLabel = 'Next' }) => {
    const stepsDispatch = useStepsDispatch();

    const goToNextStep = (): void => stepsDispatch({ type: 'Step/Next' });

    return (
        <>
            {error && <StyledP color="error">{error}</StyledP>}
            <Buttons>
                {onPrevious && <BackButton onClick={onPrevious}>Back</BackButton>}
                <NextButton onClick={onNext || goToNextStep}>{nextLabel}</NextButton>
            </Buttons>
        </>
    );
};
