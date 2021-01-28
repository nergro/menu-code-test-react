import { getArray } from '../getArray';
import { Dishes } from '../../types/dish';

export const orderIncludesEnoughDishes = (dishes: Dishes): boolean => {
    const dishesArray = getArray(dishes);
    return dishesArray.length >= 2 && dishesArray.some((x) => x.type === 'mains');
};
