import React, { FC } from 'react';
import styled from 'styled-components';
import { NavigationButtons } from '../NavigationButtons';
import { P } from '../../Atoms/text/P';
import { TotalGuestsOrderPrice } from '../TotalGuestsOrderPrice';
import { Guests } from '../../../types/guest';
import { Order } from '../Order/Order';

const OrderContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 30px;
`;

interface Props {
    guestsOrder: number[];
    guests: Guests;
}
export const OrderReview: FC<Props> = ({ guestsOrder, guests }) => {
    return (
        <>
            <P size="medium" weight="500">
                Order review
            </P>
            <OrderContainer>
                {guestsOrder.map((id) => {
                    const guest = guests[id];
                    return guest ? <Order key={id} guest={guest} /> : null;
                })}
            </OrderContainer>
            <TotalGuestsOrderPrice guests={guests} />
            <NavigationButtons nextLabel="Confirm" />
        </>
    );
};
