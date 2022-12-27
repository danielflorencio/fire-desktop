import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Expense } from '../../types/expense'
import { expenses } from '../../data/expenses'
import { categories } from '../../data/categories'
export interface ExpensesSliceState{
  expenses: Expense[];
  totalBalance: number;
}
const initialState: ExpensesSliceState = {
  expenses: expenses, // The first expenses is the value of the state, and the second expenses is an array of 'expense' objects called from an external file. In a real world application, we would need to call this data from the database.
  totalBalance: 0
} 

export const expensesSlice = createSlice({
  name: 'Expenses',
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<Expense>) => {
      const expense = action.payload
      state.expenses.push(expense)
      let incomeCount = 0
      let expenseCount = 0
      for(let i = 0; i < expenses.length; i++){
        if (categories[expenses[i].category].expense){                
          expenseCount += expenses[i].value
        } else{
          incomeCount += expenses[i].value
        }
      }
      state.totalBalance = incomeCount - expenseCount     
      // expenses.push(expense) // updates the value of the object expenses called from 'data/expenses'
    }
  },
})


export const {addExpense} = expensesSlice.actions;

export default expensesSlice.reducer;

