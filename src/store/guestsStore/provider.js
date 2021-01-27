import { storeFactory } from '../storeFactory';

import { reducer } from './reducer';

export const initialState = {
    activeGuest: 1,
    order: [1, 2],
    guests: {
        1: {
            id: 1,
            name: '',
            dishes: {},
            totalSum: 0,
        },
        2: {
            id: 2,
            name: '',
            dishes: {},
            totalSum: 0,
        },
    },
};

export const {
    dispatchContext: GuestsDispatchContext,
    stateContext: GuestsStateContext,
    provider: GuestsStoreProvider,
} = storeFactory(reducer, initialState);
