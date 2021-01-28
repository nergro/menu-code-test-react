import React, { FC } from 'react';
import { useState as useGuestsState } from '../../store/guestsStore/hooks';
import styled from 'styled-components';
import { NavigationButtons } from '../Molecules/NavigationButtons';
import { P } from '../Atoms/text/P';
import { getArray } from '../../services/getArray';
import { TotalGuestsOrderPrice } from '../Molecules/TotalGuestsOrderPrice';

const OrderContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
`;

const GuestLabel = styled(P)`
    margin: 0;
`;

const OrderList = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid ${(props) => props.theme.colors.border.light};
    width: 270px;
    height: 270px;
    padding: 20px;

    &:not(:first-child) {
        margin-left: 20px;
    }
`;

const Dishes = styled.div`
    flex-grow: 1;
    margin-top: 20px;
`;

const DishLabel = styled(P)``;

const TotalLabel = styled(P)``;

export const OrderReview: FC = () => {
    const guestsState = useGuestsState();

    return (
        <>
            <P size="medium" weight="500">
                Order review
            </P>
            <OrderContainer>
                {guestsState.order.map((id) => {
                    const guest = guestsState.guests[id];
                    return (
                        <OrderList key={id}>
                            <GuestLabel weight="700">Guest</GuestLabel>
                            <GuestLabel>{guest.name}</GuestLabel>
                            <Dishes>
                                {getArray(guest.dishes).map((dish) => (
                                    <DishLabel key={dish.id}>
                                        <strong>{dish.name}</strong> - {dish.price}€
                                    </DishLabel>
                                ))}
                            </Dishes>
                            <TotalLabel>
                                <strong>Sum:</strong> {guest.totalSum}€
                            </TotalLabel>
                        </OrderList>
                    );
                })}
            </OrderContainer>
            <TotalGuestsOrderPrice />
            <NavigationButtons nextLabel="Confirm" />
        </>
    );
};
