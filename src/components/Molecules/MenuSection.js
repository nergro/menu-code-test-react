import React from 'react';
import { Dish } from '../Atoms/Dish';
import { P } from '../Atoms/text/P';
import styled from 'styled-components';
import {
    useDispatch as useGuestsDispatch,
    useState as useGuestsState,
} from '../../store/guestsStore/hooks';

const Container = styled.div`
    margin-top: 20px;
`;

const StyledP = styled(P)`
    border-bottom: 1px solid ${(props) => props.theme.colors.button.default.border};
    text-align: left;
    margin-top: 0;
    width: 15%;
    padding-bottom: 3px;
`;

const Dishes = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const StyledDish = styled(Dish)`
    margin: 10px 10px 0 0;
`;

export const MenuSection = ({ className, type, dishes, onError }) => {
    const guestsDispatch = useGuestsDispatch();
    const guestsState = useGuestsState();
    const activeGuest = guestsState.guests[guestsState.activeGuest];

    const onDishClick = (dish) => {
        const hasAnySameTypeDishesSelected = Object.keys(activeGuest.dishes).some(
            (key) => activeGuest.dishes[key].type === type
        );
        if (hasAnySameTypeDishesSelected) {
            return onError('You cannot have more than one dish of the same course');
        }
        guestsDispatch({
            type: 'Guests/Guest/UpdateDish',
            payload: { guestId: activeGuest.id, dish: { ...dish, type } },
        });
    };

    return (
        <Container className={className}>
            <StyledP size="medium">{type.charAt(0).toUpperCase() + type.slice(1)}</StyledP>
            <Dishes>
                {dishes.map((dish) => (
                    <StyledDish
                        key={dish.id}
                        name={dish.name}
                        price={dish.price}
                        onClick={() => onDishClick(dish)}
                        isActive={!!activeGuest.dishes[dish.id]}
                    >
                        {dish.name}
                    </StyledDish>
                ))}
            </Dishes>
        </Container>
    );
};
