import { Expense } from "../types/expense";
import { categories } from "./categories";
export const expenses: Expense[] = [ 
    { date: new Date(2022, 11, 5), category: 'food', title: 'Chicken', value: 22.7 },
    { date: new Date(2022, 11, 14), category: 'food', title: 'Energetic', value: 8.8 },
    { date: new Date(2022, 10, 15), category: 'ads', title: 'Facebook', value: 8.8 },
    { date: new Date(2022, 10, 6), category: 'ads', title: 'Google', value: 8.8 },
    { date: new Date(2022, 10, 6), category: 'rent', title: 'Apartment', value: 8.8 },
    { date: new Date(2023, 0, 2), category: 'rent', title: 'Apartment', value: 200 },
    { date: new Date(2023, 0, 3), category: 'food', title: 'Fish', value: 8.8 },
    { date: new Date(2023, 0, 7), category: 'salary', title: 'Web Development', value: 1000 }
];
