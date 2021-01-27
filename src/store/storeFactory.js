import React from 'react';

export const storeFactory = (reducer, initialState) => {
    const StateContext = React.createContext(undefined);
    const DispatchContext = React.createContext(undefined);

    const Provider = ({ children, initialState: initialStateOverride }) => {
        const [state, dispatch] = React.useReducer(reducer, initialStateOverride || initialState);
        return (
            <StateContext.Provider value={state}>
                <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
            </StateContext.Provider>
        );
    };

    return {
        stateContext: StateContext,
        dispatchContext: DispatchContext,
        provider: Provider,
    };
};
