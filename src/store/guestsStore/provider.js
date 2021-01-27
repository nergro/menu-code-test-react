import { storeFactory } from '../storeFactory';

import { reducer } from './reducer';

export const initialState = [];

export const {
    dispatchContext: GuestsDispatchContext,
    stateContext: GuestsStateContext,
    provider: GuestsStoreProvider,
} = storeFactory(reducer, initialState);
