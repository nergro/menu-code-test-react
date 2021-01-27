export const reducer = (state, action) => {
    switch (action.type) {
        case 'Guests/AddGuests': {
            const guests = action.payload.reduce((acc, guest) => {
                return [
                    ...acc,
                    {
                        id: guest.id,
                        name: guest.name,
                        dishes: [],
                        totalSum: 0,
                    },
                ];
            }, []);

            return guests;
        }
        case 'Guests/Guest/AddDish': {
            const { guestId, dish } = action.payload;

            const guestIndex = state.findIndex((guest) => guest.id === guestId);

            const updatedGuests = [...state];

            if (guestIndex < 0) {
                return state;
            }

            updatedGuests[guestIndex] = {
                ...state[guestIndex],
                dishes: [...state[guestIndex].dishes, dish],
                totalSum: state[guestIndex].totalSum + dish.price,
            };

            return updatedGuests;
        }

        default: {
            const _ignore = action;
            return state;
        }
    }
};
