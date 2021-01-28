import { Dish } from './dish';

export interface Guest {
    id: number;
    name: string;
    dishes: Record<number, Dish>;
    totalSum: number;
    error?: string;
}

export type Guests = Record<number, Guest>;
