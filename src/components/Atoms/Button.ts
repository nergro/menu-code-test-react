import styled from 'styled-components';

export const Button = styled.button`
    width: 135px;
    height: 40px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 700;
    font-family: ${(props) => props.theme.fontFamily.Main};
    box-shadow: 0 20px 30px 0 rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    @media (max-width: ${(props) => props.theme.breakpoints.m}) {
        font-size: 13px;
        font-weight: 500;
        width: 115px;
        height: 36px;
    }

    color: ${(props) => props.theme.colors.button.default.textColor};
    background: ${(props) => props.theme.colors.button.default.backgroundColor};

    &:hover:enabled {
        color: ${(props) => props.theme.colors.button.hover.textColor};
        background: ${(props) => props.theme.colors.button.hover.backgroundColor};
    }

    &:disabled {
        opacity: 0.4;
        cursor: unset;
    }
`;
