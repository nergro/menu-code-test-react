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
                    },
                ];
            }, []);
            return [...state, ...guests];
        }

        default: {
            const _ignore = action;
            return state;
        }
    }
};
