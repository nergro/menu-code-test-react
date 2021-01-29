import React, { FC } from 'react';
import { Guest } from '../../../types/guest';
import styled from 'styled-components';
import { P } from '../../Atoms/text/P';
import { getArray } from '../../../services/getArray';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid ${(props) => props.theme.colors.border.light};
    width: 270px;
    height: 270px;
    padding: 20px;
    margin: 20px 20px 0 20px;
`;

const GuestLabel = styled(P)`
    margin: 0;
`;

const DishesList = styled.ul`
    flex-grow: 1;
    margin-top: 20px;
    padding: 0;
`;

const DishesListItem = styled.li`
    list-style: none;
    text-align: center;
    margin: 10px 0;
`;

interface Props {
    guest: Guest;
}

export const Order: FC<Props> = ({ guest }) => {
    return (
        <Container>
            <GuestLabel weight="700">Guest</GuestLabel>
            <GuestLabel>{guest.name}</GuestLabel>
            <DishesList>
                {getArray(guest.dishes).map((dish) => (
                    <DishesListItem key={dish.id}>
                        <strong>{dish.name}</strong> - {dish.price}€
                    </DishesListItem>
                ))}
            </DishesList>
            <P>
                <strong>Sum:</strong> {guest.totalSum}€
            </P>
        </Container>
    );
};
