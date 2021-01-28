import { DefaultTheme } from 'styled-components';

const primaryAccent = '#DA3743';
const secondaryAccent = '#2D333F';

export const theme: DefaultTheme = {
    colors: {
        accents: {
            primary: primaryAccent,
            secondary: secondaryAccent,
        },
        text: {
            primary: '#000000',
            secondary: '#FFFFFF',
            error: '#C70E0E',
        },
        input: {
            border: '#F2F2F2',
            borderFocus: '#2B343B',
            text: '#141412',
            background: '#F5F5F5',
            placeholder: '#606060',
            error: '#FF0000',
        },
        border: {
            light: '#AAAAAA',
        },
        button: {
            default: {
                textColor: '#FFFFFF',
                border: '#AAAAAA',
                backgroundColor: primaryAccent,
            },
            hover: {
                backgroundColor: secondaryAccent,
                textColor: '#FFFFFF',
            },
            active: {
                background: '#51CF66',
                border: '#51CF66',
            },
        },
    },
    fontFamily: {
        Main: '"Roboto", Sans-serif',
    },
    fonts: {
        mediumTextSemiBold: '500 20px Roboto, Sans-serif',
        normalText: '400 16px Roboto, Sans-serif',
        smallText: '400 14px Roboto, Sans-serif',
    },
    breakpoints: {
        sm: '450px',
        s: '700px',
        m: '1000px',
        l: '1300px',
        xl: '1600px',
    },
};
