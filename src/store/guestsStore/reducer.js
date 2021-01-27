const getList = (object) => Object.keys(object).map((key) => object[key]);

const hasSameCourseDish = (dishToAdd, dishes) =>
    getList(dishes).some((dish) => dish.id !== dishToAdd.id && dish.type === dishToAdd.type);

const getUsedDishCount = (guests, dishName) =>
    getList(guests).reduce((count, guest) => {
        const dishUsedCount = getList(guest.dishes).filter((x) => x.name === dishName).length;
        return count + dishUsedCount;
    }, 0);

const forbiddenMealCombinations = [['Prawn cocktail', 'Salmon fillet']];

const isDishUsed = (dishes, dishName) => getList(dishes).some((x) => x.name === dishName);

const isDishAvailable = (dishName, dishes) => {
    const possibleForbiddenCombinations = forbiddenMealCombinations.filter((x) =>
        x.includes(dishName)
    );

    return possibleForbiddenCombinations.every((comb) =>
        comb.filter((x) => x !== dishName).every((x) => !isDishUsed(dishes, x))
    );
};

const getDishUpdateError = (dish, dishes, guests) => {
    if (hasSameCourseDish(dish, dishes)) {
        return 'You cannot have more than one dish of the same course';
    }

    if (dish.name === 'Cheesecake' && getUsedDishCount(guests, 'Cheesecake') > 0) {
        return `${dish.name} is out of stock`;
    }

    if (!isDishAvailable(dish.name, dishes)) {
        return 'Selected meal combination is not available';
    }

    return '';
};

export const reducer = (state, action) => {
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
