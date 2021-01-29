import React, { FC, ReactElement } from 'react';
import { GuestForm } from '../GuestForm/GuestForm';
import { Menu } from '../Menu/Menu';
import { useState as useStepState } from '../../../store/stepsStore/hooks';
import { useState as useGuestsState } from '../../../store/guestsStore/hooks';
import { OrderReview } from '../../Molecules/OrderReview/OrderReview';
import { OrderComplete } from '../../Molecules/OrderComplete';
import { Step } from '../../../types/steps';
import styled from 'styled-components';
import { H1 } from '../../Atoms/text/H';
import menuDataJSON from '../../../../menu-data.json';
import { MenuData } from '../../../types/menu';

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

export const Home: FC = () => {
    const activeStep = useStepState();
    const guestsState = useGuestsState();
    const menuData: MenuData = Object.assign(new MenuData(), menuDataJSON);

    const steps: Record<Step, ReactElement> = {
        guestForm: <GuestForm />,
        menu: <Menu data={menuData} />,
        orderReview: <OrderReview guestsOrder={guestsState.order} guests={guestsState.guests} />,
        orderComplete: <OrderComplete />,
    };

    return (
        <Container>
            <H1 weight="500">OT Menu</H1>
            <Content>{steps[activeStep]}</Content>
        </Container>
    );
};
