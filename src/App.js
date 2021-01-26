import React from 'react';
import { render } from 'react-dom';
import { Home } from './components/Organisms/Home/Home';
import { theme } from './services/theme';
import { ThemeProvider } from 'styled-components';

export const App = () => {
    return <Home />;
};

render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>,
    document.getElementById('root')
);
