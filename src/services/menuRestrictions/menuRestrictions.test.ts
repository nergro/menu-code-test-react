import { Dish } from '../../types/dish';
import {
    dishCombinationInvalid,
    dishOutOfStock,
    hasSameCourseDish,
    orderIncludesEnoughDishes,
} from './index';

import { mockedGuests } from '../../mocks/mockedGuests';

const guests = {
    ...mockedGuests,
    [2]: {
        ...mockedGuests[2],
        dishes: { 4: mockedGuests[2].dishes[4] },
    },
};

test('should include at least two courses, one of which must be a main', () => {
    const dishes = {
        4: {
            id: 4,
            name: 'Prawn cocktail',
            price: 6,
            type: 'starters',
        },
    };

    expect(orderIncludesEnoughDishes(dishes)).toBeFalsy();

    const updatedDishes = {
        ...dishes,
        11: {
            id: 11,
            name: 'Cheesecake',
            price: 4,
            type: 'deserts',
        },
    };
    expect(orderIncludesEnoughDishes(updatedDishes)).toBeFalsy();

    expect(
        orderIncludesEnoughDishes({
            ...updatedDishes,
            6: {
                id: 6,
                name: 'Meatballs',
                price: 11.5,
                type: 'mains',
            },
        })
    ).toBeTruthy();
});

test('should prevent adding same course dish', () => {
    const dishToAdd: Dish = {
        id: 3,
        name: 'Bruschetta',
        price: 4.5,
        type: 'starters',
    };

    expect(hasSameCourseDish(dishToAdd, guests[2].dishes)).toBeTruthy();
});

test('should prevent adding dish which is out of stock', () => {
    const dishToAdd: Dish = {
        id: 11,
        name: 'Cheesecake',
        price: 4,
        type: 'deserts',
    };

    expect(dishOutOfStock(dishToAdd.name, guests[2].dishes, guests)).toBeTruthy();
});

test('should prevent adding dish which is in forbidden combination', () => {
    const dishToAdd: Dish = {
        id: 7,
        name: 'Salmon fillet',
        price: 14,
        type: 'mains',
    };

    expect(dishCombinationInvalid(mockedGuests[2].dishes, dishToAdd.name)).toBeTruthy();
});
