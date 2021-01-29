export interface DishDTO {
    id: number;
    name: string;
    price: number;
}

export interface Dish extends DishDTO {
    type: string;
}

export type Dishes = Record<number, Dish>;
