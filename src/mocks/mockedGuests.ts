import { Guests } from '../types/guest';

export const mockedGuests: Guests = {
    1: {
        id: 1,
        name: 'John',
        dishes: {
            1: {
                id: 1,
                name: 'Soup',
                price: 3,
                type: 'starters',
            },
            6: {
                id: 6,
                name: 'Meatballs',
                price: 11.5,
                type: 'mains',
            },
            11: {
                id: 11,
                name: 'Cheesecake',
                price: 4,
                type: 'deserts',
            },
        },
        totalSum: 18.5,
    },
    2: {
        id: 1,
        name: 'Jack',
        dishes: {
            4: {
                id: 4,
                name: 'Prawn cocktail',
                price: 6,
                type: 'starters',
            },
            6: {
                id: 6,
                name: 'Meatballs',
                price: 11.5,
                type: 'mains',
            },
        },
        totalSum: 17.5,
    },
};
