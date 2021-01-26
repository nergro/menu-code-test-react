import styled from 'styled-components';

export const Input = styled.input`
    width: 100%;
    outline: none;
    border: 1px solid
        ${(props) =>
            props.hasError ? props.theme.colors.input.error : props.theme.colors.input.border};
    background: ${(props) => props.theme.colors.input.background};
    color: ${(props) => props.theme.colors.input.text};
    font: ${(props) => props.theme.fonts.normalText};

    &::placeholder {
        color: ${(props) => props.theme.colors.input.placeholder};
    }
    &:focus {
        border: 1px solid
            ${(props) =>
                props.hasError
                    ? props.theme.colors.input.error
                    : props.theme.colors.input.borderFocus};
    }

    height: 40px;
    padding: 4px 4px 4px 18px;
`;
