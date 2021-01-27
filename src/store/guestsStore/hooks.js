import React from 'react';

import { GuestsDispatchContext, GuestsStateContext } from './provider';

export const useState = () => {
    const state = React.useContext(GuestsStateContext);
    if (state === undefined) {
        throw new Error('GuestsStore is not initialized');
    }
    return state;
};

export const useDispatch = () => {
    const dispatch = React.useContext(GuestsDispatchContext);
    if (dispatch === undefined) {
        throw new Error('GuestsStore is not initialized');
    }
    return dispatch;
};
