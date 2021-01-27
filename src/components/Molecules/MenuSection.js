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

export const MenuSection = ({ className, title, dishes, guest }) => {
    const guestsState = useGuestsState();
    const guestsDispatch = useGuestsDispatch();
    console.log(guest);
    return (
        <Container className={className}>
            <StyledP size="medium">{title.charAt(0).toUpperCase() + title.slice(1)}</StyledP>
            <Dishes>
                {dishes.map((dish) => {
                    // console.log(dish.id);
                    // const dishActive = guest.dishes.findIndex((x) => x.id === dish.id);
                    // console.log(guest.dishes);
                    // console.log(dishActive);
                    return (
                        <StyledDish
                            key={dish.id}
                            name={dish.name}
                            price={dish.price}
                            onClick={() =>
                                guestsDispatch({
                                    type: 'Guests/Guest/AddDish',
                                    payload: { guestId: guest.id, dish },
                                })
                            }
                            isActive={guest.dishes.findIndex((x) => x.id === dish.id) > -1}
                        >
                            {dish.name}
                        </StyledDish>
                    );
                })}
            </Dishes>
        </Container>
    );
};
