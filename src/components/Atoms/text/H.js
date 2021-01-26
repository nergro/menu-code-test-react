import styled from 'styled-components';

const sizes = {
    normal: {
        desktop: '35px',
        mobile: '30px',
    },
};

export const H1 = styled.h1`
    color: ${(props) => props.theme.colors.text[props.color || 'main']};
    font-family: ${(props) => props.theme.fontFamily[props.font || 'Main']};
    font-weight: ${(props) => props.weight || '400'};
    font-size: ${(props) => sizes[props.size || 'normal'].desktop};
    text-align: center;
`;
