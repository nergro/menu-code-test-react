import { Dishes } from '../../types/dish';
import { getArray } from '../getArray';

const forbiddenMealCombinations = [['Prawn cocktail', 'Salmon fillet']];

const isDishUsed = (dishes: Dishes, dishName: string): boolean =>
    getArray(dishes).some((x) => x.name === dishName);

export const dishCombinationInvalid = (dishes: Dishes, dishName: string): boolean => {
    const possibleForbiddenCombinations = forbiddenMealCombinations.filter((x) =>
        x.includes(dishName)
    );

    return !possibleForbiddenCombinations.every((comb) =>
        comb.filter((x) => x !== dishName).every((x) => !isDishUsed(dishes, x))
    );
};
