import React from 'react';

import { StepDispatchContext, StepStateContext } from './provider';

export const useState = () => {
    const state = React.useContext(StepStateContext);
    if (state === undefined) {
        throw new Error('StepStore is not initialized');
    }
    return state;
};

export const useDispatch = () => {
    const dispatch = React.useContext(StepDispatchContext);
    if (dispatch === undefined) {
        throw new Error('StepStore is not initialized');
    }
    return dispatch;
};
