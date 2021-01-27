import React from 'react';
import styled from 'styled-components';
import { Span } from './text/Span';

const Button = styled.button`
    border: 2px solid
        ${(props) =>
            props.isActive
                ? props.theme.colors.button.active.border
                : props.theme.colors.button.default.border};

    width: 160px;
    background: transparent;
    border-radius: 5px;
    transition: all 0.3s ease;
    cursor: pointer;
    &:hover,
    &:focus {
        box-shadow: rgb(0 0 0 / 25%) 0px 0px 8px 1px;
    }
    font: ${(props) => props.theme.fonts.normalText};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 7px;
    outline: none;

    ${Span} {
        &:first-child {
            font-weight: 500;
        }
    }

    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
        width: 135px;
        padding: 7px 5px;
        ${Span} {
            font: ${(props) => props.theme.fonts.smallText};
        }
    }
`;

const StyledSpan = styled(Span)`
    margin-top: 5px;
`;

export const Dish = ({ className, name, price, ...rest }) => {
    return (
        <Button className={className} {...rest}>
            <Span>{name}</Span>
            <StyledSpan>{price} €</StyledSpan>
        </Button>
    );
};
