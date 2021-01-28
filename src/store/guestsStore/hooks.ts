import React from 'react';
import { Dispatch } from '../types';

import { GuestsDispatchContext, GuestsStateContext, State, Action } from './provider';

export const useState = (): State => {
    const state = React.useContext(GuestsStateContext);
    if (state === undefined) {
        throw new Error('GuestsStore is not initialized');
    }
    return state;
};

export const useDispatch = (): Dispatch<Action> => {
    const dispatch = React.useContext(GuestsDispatchContext);
    if (dispatch === undefined) {
        throw new Error('GuestsStore is not initialized');
    }
    return dispatch;
};
