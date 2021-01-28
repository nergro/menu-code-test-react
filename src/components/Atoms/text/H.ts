import styled, { DefaultTheme } from 'styled-components';
import { FontSizeCollection } from '../../../types/fontSizeCollection';

type Size = 'normal';

const sizes: FontSizeCollection<Size> = {
    normal: {
        desktop: '35px',
        mobile: '30px',
    },
};

export interface Props {
    size?: Size;
    color?: keyof DefaultTheme['colors']['text'];
    weight?: '400' | '500' | '600' | '700' | '900';
    font?: keyof DefaultTheme['fontFamily'];
}

export const H1 = styled.h1<Props>`
    color: ${(props) => props.theme.colors.text[props.color || 'primary']};
    font-family: ${(props) => props.theme.fontFamily[props.font || 'Main']};
    font-weight: ${(props) => props.weight || '400'};
    font-size: ${(props) => sizes[props.size || 'normal'].desktop};
    text-align: center;
`;
