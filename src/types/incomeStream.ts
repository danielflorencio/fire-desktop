import { IncomeStreamCategory } from "./incomeStreamCategory"
export type IncomeStream = {
    name: string, 
    monthlyReturn: number,
    timeSpent: number,
    category?: IncomeStreamCategory
}