import { Expense } from "../types/expense";
export const expenses: Expense[] = [ // This line makes so 'expenses' is an array of the Expense type. 
    { date: new Date(2022, 11, 5), category: 'food', title: 'Chicken', value: 22.7 },
    { date: new Date(2022, 11, 14), category: 'food', title: 'Energetic', value: 8.8 },
    { date: new Date(2022, 10, 15), category: 'ads', title: 'Facebook', value: 8.8 },
    { date: new Date(2022, 10, 6), category: 'ads', title: 'Google', value: 8.8 },
    { date: new Date(2022, 10, 6), category: 'rent', title: 'Apartment', value: 8.8 }
];
