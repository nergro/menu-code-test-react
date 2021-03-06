import { steps } from '../../types/steps';
import { Action, State, initialState } from './provider';

export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'Step/Next': {
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
        case 'Step/Reset': {
            return initialState;
        }

        default: {
            const _ignore: never = action;
            return state;
        }
    }
};
