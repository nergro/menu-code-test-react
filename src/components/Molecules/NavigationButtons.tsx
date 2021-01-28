import React, { FC } from 'react';
import styled from 'styled-components';
import { Button } from '../Atoms/Button';
import { P } from '../Atoms/text/P';
import {
    useDispatch as useStepsDispatch,
    useState as useStepsState,
} from '../../store/stepsStore/hooks';
import {
    useState as useGuestsState,
    useDispatch as useGuestsDispatch,
} from '../../store/guestsStore/hooks';

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
    error?: string;
    nextLabel?: string;
    previousDisabled?: boolean;
}

export const NavigationButtons: FC<Props> = ({
    onNext,
    error,
    nextLabel = 'Next',
    previousDisabled,
}) => {
    const stepsDispatch = useStepsDispatch();
    const guestsDispatch = useGuestsDispatch();

    const guestsState = useGuestsState();
    const stepsState = useStepsState();

    const goToNextStep = (): void => stepsDispatch({ type: 'Step/Next' });

    const onPrevious = (): void => {
        if (stepsState === 'menu') {
            return guestsState.activeGuest === 1
                ? stepsDispatch({ type: 'Step/Previous' })
                : guestsDispatch({
                      type: 'Guests/SetActiveGuest',
                      payload: { guestId: guestsState.activeGuest - 1 },
                  });
        }
        stepsDispatch({ type: 'Step/Previous' });
    };

    return (
        <>
            {error && <StyledP color="error">{error}</StyledP>}
            <Buttons>
                {!previousDisabled && <BackButton onClick={onPrevious}>Back</BackButton>}
                <NextButton onClick={onNext || goToNextStep}>{nextLabel}</NextButton>
            </Buttons>
        </>
    );
};
