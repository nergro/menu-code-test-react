import React,{FC} from 'react';
import { render } from 'react-dom';
import { Home } from './components/Organisms/Home/Home';
import { theme } from './services/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './globalStyle';
import { ProvidersInjector } from './ProvidersInjector';
import { StepStoreProvider } from './store/stepsStore/provider';
import { GuestsStoreProvider } from './store/guestsStore/provider';

const storeProviders = [StepStoreProvider, GuestsStoreProvider];

export const App:FC = () => {
    return (
        <ProvidersInjector providers={storeProviders}>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Home />
            </ThemeProvider>
        </ProvidersInjector>
    );
};

render(<App />, document.getElementById('root'));
