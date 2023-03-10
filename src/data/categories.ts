import { Category } from '../types/category';
export const categories: Category = {
    food: { title: 'Food', color: 'white', bgColor: 'blue', expense: true, categoryId: 0},
    rent: { title: 'Rent', color: 'white', bgColor: 'brown', expense: true, categoryId: 1 },
    salary: { title: 'Salary', color: 'black', bgColor: 'green', expense: false, categoryId: 2},
    ads: {title: 'Ads', color: 'black', bgColor: 'green', expense: true, categoryId: 3},
    shopping: {title: 'Shopping', color: 'black', bgColor: 'green', expense: true, categoryId: 4},
    groceries: {title: 'Groceries', color: 'black', bgColor: 'green', expense: true, categoryId: 5},
    transportation: {title: 'Transportation', color: 'green', bgColor: 'black', expense: true, categoryId: 6},
    entertainment: {title: 'Entertainment', color: 'green', bgColor: 'black', expense: true, categoryId: 7},
    utilities: {title: 'Utilities', color: 'green', bgColor: 'black', expense: true, categoryId: 8},
}