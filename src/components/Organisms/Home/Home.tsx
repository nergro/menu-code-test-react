import React, { FC } from 'react';
import { GuestForm } from '../GuestForm/GuestForm';
import { Menu } from '../Menu/Menu';
import { useState as useStepState } from '../../../store/stepsStore/hooks';
import { OrderReview } from '../OrderReview';
import { OrderComplete } from '../../Molecules/OrderComplete';
import { Step } from '../../../types/steps';
import styled from 'styled-components';
import { H1 } from '../../Atoms/text/H';

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

const steps: Record<Step, FC> = {
    guestForm: GuestForm,
    menu: Menu,
    orderReview: OrderReview,
    orderComplete: OrderComplete,
};

export const Home: FC = () => {
    const activeStep = useStepState();
    const CurrentStep = steps[activeStep];

    return (
        <Container>
            <H1 weight="500">OT Menu</H1>
            <Content>
                <CurrentStep />
            </Content>
        </Container>
    );
};
