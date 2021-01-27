import styled from 'styled-components';

const sizes = {
    normal: {
        desktop: '16px',
        mobile: '16px',
    },
};

export const Span = styled.span`
    color: ${(props) => props.theme.colors.text[props.color || 'main']};
    font-family: ${(props) => props.theme.fontFamily[props.font || 'Main']};
    font-weight: ${(props) => props.weight || '400'};
    font-size: ${(props) => sizes[props.size || 'normal'].desktop};
    text-align: center;
`;
