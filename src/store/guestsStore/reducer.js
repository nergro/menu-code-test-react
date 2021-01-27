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

            guestToUpdate.name = name;

            return {
                ...state,
                guests: {
                    ...state.guests,
                    [guestId]: guestToUpdate,
                },
            };
        }
        case 'Guests/Guest/UpdateDish': {
            const { guestId, dish } = action.payload;

            const guestToUpdate = state.guests[guestId];

            if (!guestToUpdate) {
                return state;
            }

            const updatedDishes = { ...guestToUpdate.dishes };

            if (updatedDishes[dish.id]) {
                delete updatedDishes[dish.id];
            } else {
                updatedDishes[dish.id] = dish;
            }

            guestToUpdate.dishes = updatedDishes;

            return {
                ...state,
                guests: {
                    ...state.guests,
                    [guestId]: guestToUpdate,
                },
            };
        }

        default: {
            const _ignore = action;
            return state;
        }
    }
};
