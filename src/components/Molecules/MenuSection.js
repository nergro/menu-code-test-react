import React from 'react';
import { Dish } from '../Atoms/Dish';
import { P } from '../Atoms/text/P';
import styled from 'styled-components';

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

export const MenuSection = ({ className, title, dishes }) => {
    return (
        <Container className={className}>
            <StyledP size="medium">{title.charAt(0).toUpperCase() + title.slice(1)}</StyledP>
            <Dishes>
                {dishes.map((x) => (
                    <StyledDish key={x.id} name={x.name} price={x.price}>
                        {x.name}
                    </StyledDish>
                ))}
            </Dishes>
        </Container>
    );
};
