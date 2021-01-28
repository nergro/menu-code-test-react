import { Dish, Dishes } from '../../types/dish';
import { Guests } from '../../types/guest';
import { Action, State, initialState } from './provider';
import {
    dishCombinationInvalid,
    hasSameCourseDish,
    dishOutOfStock,
} from '../../services/menuRestrictions';

const getDishUpdateError = (dishToAdd: Dish, guestDishes: Dishes, guests: Guests): string => {
    if (hasSameCourseDish(dishToAdd, guestDishes)) {
        return 'You cannot have more than one dish of the same course';
    }

    if (dishOutOfStock(dishToAdd.name, guestDishes, guests)) {
        return `${dishToAdd.name} is out of stock`;
    }

    if (dishCombinationInvalid(guestDishes, dishToAdd.name)) {
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
                guestToUpdate.totalSum -= dish.price;
            } else {
                updatedDishes[dish.id] = { ...dish };
                guestToUpdate.totalSum += dish.price;
            }

            return {
                ...state,
                guests: {
                    ...state.guests,
                    [guestId]: { ...guestToUpdate, dishes: updatedDishes },
                },
            };
        }
        case 'Guests/Guest/SetError': {
            const { guestId, error } = action.payload;

            return {
                ...state,
                guests: {
                    ...state.guests,
                    [guestId]: { ...state.guests[guestId], error },
                },
            };
        }
        case 'Guests/Reset': {
            return initialState;
        }

        default: {
            const _ignore = action;
            return state;
        }
    }
};
