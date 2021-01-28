import { Guests } from '../../types/guest';
import { Dishes } from '../../types/dish';
import { getArray } from '../getArray';

const getUsedDishCount = (guests: Guests, dishName: string): number =>
    getArray(guests).reduce((count, guest) => {
        const dishUsedCount = getArray(guest.dishes).filter((x) => x.name === dishName).length;
        return count + dishUsedCount;
    }, 0);

const leftoverDish = 'Cheesecake';

export const dishOutOfStock = (dishName: string, guestDishes: Dishes, guests: Guests): boolean =>
    !getArray(guestDishes).some((x) => x.name === dishName) &&
    dishName === leftoverDish &&
    getUsedDishCount(guests, leftoverDish) > 0;
