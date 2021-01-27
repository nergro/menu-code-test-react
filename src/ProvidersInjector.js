import React from 'react';

export const ProvidersInjector = ({ providers: [Provider, ...restProviders], children }) => {
    if (!Provider) {
        return <>{children}</>;
    }

    return (
        <Provider>
            <ProvidersInjector providers={restProviders}>{children}</ProvidersInjector>
        </Provider>
    );
};
