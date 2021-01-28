import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            accents: {
                primary: string;
                secondary: string;
            };
            text: {
                primary: string;
                secondary: string;
                error: string;
            };
            input: {
                border: string;
                borderFocus: string;
                text: string;
                background: string;
                placeholder: string;
                error: string;
            };
            border: {
                light: string;
            };
            button: {
                default: {
                    textColor: string;
                    border: string;
                    backgroundColor: string;
                };
                hover: {
                    backgroundColor: string;
                    textColor: string;
                };
                active: {
                    background: string;
                    border: string;
                };
            };
        };
        fontFamily: {
            Main: string;
        };
        fonts: {
            mediumTextSemiBold: string;
            normalText: string;
            smallText: string;
        };
        breakpoints: {
            sm: string;
            s: string;
            m: string;
            l: string;
            xl: string;
        };
    }
}
