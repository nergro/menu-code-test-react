import React, { FC, ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';
import { Span } from './text/Span';

interface ButtonProps {
    isActive?: boolean;
}

const Button = styled.button<ButtonProps>`
    background: ${(props) =>
        props.isActive ? props.theme.colors.button.active.background : 'transparent'};
    border: 2px solid
        ${(props) => props.theme.colors.button[props.isActive ? 'active' : 'default'].border};

    width: 160px;
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
        color: ${(props) => props.theme.colors.text[props.isActive ? 'secondary' : 'primary']};
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

interface Props extends ComponentPropsWithoutRef<'button'> {
    className?: string;
    name: string;
    price: number;
    isActive?: boolean;
}

export const Dish: FC<Props> = ({ className, name, price, ...rest }) => {
    return (
        <Button className={className} {...rest}>
            <Span>{name}</Span>
            <StyledSpan>{price} €</StyledSpan>
        </Button>
    );
};
