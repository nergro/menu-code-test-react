import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            accents: {
                primary: string;
                secondary: string;
            };
            text: {
                main: string;
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
