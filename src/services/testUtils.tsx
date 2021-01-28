import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { render, RenderResult } from '@testing-library/react';
import React, { ReactElement } from 'react';
import { ProvidersInjector } from './../ProvidersInjector';
import { StepStoreProvider } from '../store/stepsStore/provider';
import { GuestsStoreProvider } from '../store/guestsStore/provider';

const storeProviders = [StepStoreProvider, GuestsStoreProvider];

export const renderComponent = (component: ReactElement): RenderResult =>
    render(
        <ProvidersInjector providers={storeProviders}>
            <ThemeProvider theme={theme}>{component}</ThemeProvider>
        </ProvidersInjector>
    );
