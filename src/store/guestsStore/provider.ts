import { storeFactory } from '../storeFactory';
import { Action as GenericAction, ActionWithPayload } from '../types';
import { Dish } from '../../types/dish';
import { Guests } from '../../types/guest';
import { reducer } from './reducer';

export type Action =
    | ActionWithPayload<'Guests/SetActiveGuest', { guestId: number }>
    | ActionWithPayload<'Guests/Guest/UpdateName', { guestId: number; name: string }>
    | ActionWithPayload<'Guests/Guest/UpdateDish', { guestId: number; dish: Dish }>
    | ActionWithPayload<'Guests/Guest/SetError', { guestId: number; error: string }>
    | GenericAction<'Guests/Reset'>;

export type State = {
    activeGuest: number;
    order: number[];
    guests: Guests;
};

export const initialState: State = {
    activeGuest: 1,
    order: [1, 2],
    guests: {
        1: {
            id: 1,
            name: '',
            dishes: {},
            totalSum: 0,
            error: '',
        },
        2: {
            id: 2,
            name: '',
            dishes: {},
            totalSum: 0,
            error: '',
        },
    },
};

export const {
    dispatchContext: GuestsDispatchContext,
    stateContext: GuestsStateContext,
    provider: GuestsStoreProvider,
} = storeFactory(reducer, initialState);
