import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Expense } from '../../types/expense'
import { expenses } from '../../data/expenses'


export interface ExpensesSliceState{
  expenses: Expense[];
}
const initialState: Expense[] = expenses


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

