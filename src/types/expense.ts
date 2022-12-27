import { Category } from "./category";
export type Expense = {
    date: Date,
    category: string;
    title: string;
    value: number;
}