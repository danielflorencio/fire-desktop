import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Expense } from '../../types/expense'
import { expenses } from '../../data/expenses'
import { Category } from '../../types/category'
import { categories } from '../../data/categories'
export interface ExpensesSliceState{
  expenses: Expense[];
}
const initialState: Expense[] = expenses


// export interface TotalBalanceSliceState{
//   totalBalance: number
// }


// The code below calculates the total balance.
// let totalBalance: number = 0
// let expenseCount = 0
// let incomeCount = 0
// for(let i = 0; i < expenses.length; i++){
//   if (categories[expenses[i].category].expense){                
//     expenseCount += expenses[i].value
// } else{
//     incomeCount += expenses[i].value
// }
// }
// totalBalance = incomeCount - expenseCount
// console.log('Total balance: ', totalBalance)
// The code above calculates the total balance.

// export const totalBalanceSliceState = createSlice({
//   name:'Total Balance',
//   totalBalance,
//   reducers: {}
// })

export const expensesSlice = createSlice({
  name: 'Expenses',
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<Expense>) => {
      const expense = action.payload
      state.push(expense)      
      console.log('expense added. Redux Working.')
    }
  },
})

export const {addExpense} = expensesSlice.actions;

export default expensesSlice.reducer;

