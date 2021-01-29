import { reducer } from './reducer';
import { Dish } from '../../types/dish';
import { initialState, State } from './provider';

test('should set active guest correctly', () => {
    expect(
        reducer(initialState, { type: 'Guests/SetActiveGuest', payload: { guestId: 2 } })
            .activeGuest
    ).toBe(2);

    expect(
        reducer(initialState, { type: 'Guests/SetActiveGuest', payload: { guestId: 9999999 } })
            .activeGuest
    ).toBe(initialState.activeGuest);
});

test('should change guest name correctly', () => {
    const newName = 'John Cena';
    const guestId = 2;

    expect(
        reducer(initialState, {
            type: 'Guests/Guest/UpdateName',
            payload: { guestId, name: newName },
        }).guests[guestId].name
    ).toBe(newName);
});

describe('should update dish correctly', () => {
    const dishToAdd: Dish = {
        id: 35,
        name: 'Cepelinai',
        price: 4.5,
        type: 'mains',
    };
    const guestId = 2;

    test('should add dish correctly', () => {
        const updatedState = reducer(initialState, {
            type: 'Guests/Guest/UpdateDish',
            payload: { guestId, dish: dishToAdd },
        });

        expect(Object.keys(updatedState.guests[guestId].dishes).length).toBe(1);
    });

    test('should remove dish correctly', () => {
        const updatedInitialState: State = {
            ...initialState,
            guests: {
                ...initialState.guests,
                [guestId]: { ...initialState.guests[guestId], dishes: { 35: dishToAdd } },
            },
        };

        const updatedState = reducer(updatedInitialState, {
            type: 'Guests/Guest/UpdateDish',
            payload: { guestId, dish: dishToAdd },
        });

        expect(Object.keys(updatedState.guests[guestId].dishes).length).toBe(0);
    });
});

test('should set guest error correctly', () => {
    const error = 'Invalid selected meal combination';
    const guestId = 2;

    expect(
        reducer(initialState, {
            type: 'Guests/Guest/SetError',
            payload: { guestId, error },
        }).guests[guestId].error
    ).toBe(error);
});

test('should reset state', () => {
    expect(reducer(initialState, { type: 'Guests/Reset' })).toBe(initialState);
});
