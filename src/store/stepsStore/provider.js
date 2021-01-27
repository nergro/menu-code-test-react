import { storeFactory } from '../storeFactory';

import { reducer } from './reducer';

export const steps = ['guestForm', 'menu', 'orderReview', 'orderComplete'];
export const initialState = steps[0];

export const {
    dispatchContext: StepDispatchContext,
    stateContext: StepStateContext,
    provider: StepStoreProvider,
} = storeFactory(reducer, initialState);
