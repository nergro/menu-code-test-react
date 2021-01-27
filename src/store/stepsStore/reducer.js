import { steps } from './provider';

export const reducer = (state, action) => {
    switch (action.type) {
        case 'Step/Next': {
            console.log('INNEXT');
            const currentIndex = steps.findIndex((x) => x === state);
            if (currentIndex < 0) {
                return state;
            }

            return currentIndex + 1 >= steps.length ? state : steps[currentIndex + 1];
        }
        case 'Step/Previous': {
            const currentIndex = steps.findIndex((x) => x === state);
            if (currentIndex < 0) {
                return state;
            }

            return currentIndex - 1 < 0 ? state : steps[currentIndex - 1];
        }

        default: {
            const _ignore = action;
            return state;
        }
    }
};
