import React from 'react';
import { Dispatch } from '../types';

import { StepDispatchContext, StepStateContext, State, Action } from './provider';

export const useState = (): State => {
    const state = React.useContext(StepStateContext);
    if (state === undefined) {
        throw new Error('StepStore is not initialized');
    }
    return state;
};

export const useDispatch = (): Dispatch<Action> => {
    const dispatch = React.useContext(StepDispatchContext);
    if (dispatch === undefined) {
        throw new Error('StepStore is not initialized');
    }
    return dispatch;
};
