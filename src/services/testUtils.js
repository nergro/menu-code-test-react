import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { render } from '@testing-library/react';
import React from 'react';

export const renderComponent = (component) =>
    render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
