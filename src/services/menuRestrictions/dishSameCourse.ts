import { getArray } from '../getArray';
import { Dish, Dishes } from '../../types/dish';

export const hasSameCourseDish = (dishToAdd: Dish, dishes: Dishes): boolean =>
    getArray(dishes).some((dish) => dish.id !== dishToAdd.id && dish.type === dishToAdd.type);
