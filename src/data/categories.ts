import { Category } from '../types/category';
export const categories: Category = {
    food: { title: 'Food', color: 'white', bgColor: 'blue', expense: true, categoryId: 0},
    rent: { title: 'Rent', color: 'white', bgColor: 'brown', expense: true, categoryId: 1 },
    salary: { title: 'Salary', color: 'black', bgColor: 'green', expense: false, categoryId: 2},
    ads: {title: 'Ads', color: 'black', bgColor: 'green', expense: true, categoryId: 3}
}