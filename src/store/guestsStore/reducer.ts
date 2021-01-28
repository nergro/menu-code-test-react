import { Dish, Dishes } from '../../types/dish';
import { Guests } from '../../types/guest';
import { Action, State } from './provider';
import { getArray } from '../../services/getArray';

const hasSameCourseDish = (dishToAdd: Dish, dishes: Dishes): boolean =>
    getArray(dishes).some((dish) => dish.id !== dishToAdd.id && dish.type === dishToAdd.type);

const getUsedDishCount = (guests: Guests, dishName: string): number =>
    getArray(guests).reduce((count, guest) => {
        const dishUsedCount = getArray(guest.dishes).filter((x) => x.name === dishName).length;
        return count + dishUsedCount;
    }, 0);

const forbiddenMealCombinations = [['Prawn cocktail', 'Salmon fillet']];

const isDishUsed = (dishes: Dishes, dishName: string): boolean =>
    getArray(dishes).some((x) => x.name === dishName);

const isDishAvailable = (dishes: Dishes, dishName: string): boolean => {
    const possibleForbiddenCombinations = forbiddenMealCombinations.filter((x) =>
        x.includes(dishName)
    );

    return possibleForbiddenCombinations.every((comb) =>
        comb.filter((x) => x !== dishName).every((x) => !isDishUsed(dishes, x))
    );
};

const getDishUpdateError = (dishToAdd: Dish, guestDishes: Dishes, guests: Guests): string => {
    if (hasSameCourseDish(dishToAdd, guestDishes)) {
        return 'You cannot have more than one dish of the same course';
    }

    if (dishToAdd.name === 'Cheesecake' && getUsedDishCount(guests, 'Cheesecake') > 0) {
        return `${dishToAdd.name} is out of stock`;
    }

    if (!isDishAvailable(guestDishes, dishToAdd.name)) {
        return 'Selected meal combination is not available';
    }

    return '';
};

export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'Guests/SetActiveGuest': {
            const { guestId } = action.payload;

            return {
                ...state,
                activeGuest: guestId,
            };
        }
        case 'Guests/Guest/UpdateName': {
            const { guestId, name } = action.payload;

            const guestToUpdate = state.guests[guestId];

            if (!guestToUpdate) {
                return state;
            }

            return {
                ...state,
                guests: {
                    ...state.guests,
                    [guestId]: { ...guestToUpdate, name },
                },
            };
        }
        case 'Guests/Guest/UpdateDish': {
            const { guestId, dish } = action.payload;

            const guestToUpdate = state.guests[guestId];

            if (!guestToUpdate) {
                return state;
            }

            const error = getDishUpdateError(dish, guestToUpdate.dishes, state.guests);

            if (error) {
                return {
                    ...state,
                    guests: {
                        ...state.guests,
                        [guestId]: {
                            ...guestToUpdate,
                            error,
                        },
                    },
                };
            }

            const updatedDishes = { ...guestToUpdate.dishes };

            if (updatedDishes[dish.id]) {
                delete updatedDishes[dish.id];
            } else {
                updatedDishes[dish.id] = { ...dish };
            }

            return {
                ...state,
                guests: {
                    ...state.guests,
                    [guestId]: { ...guestToUpdate, dishes: updatedDishes },
                },
            };
        }

        default: {
            const _ignore = action;
            return state;
        }
    }
};
