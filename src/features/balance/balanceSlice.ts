import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import { Expense } from '../../types/expense'
import { expenses } from '../../data/expenses'
import { getTotalBalance } from '../../helpers/getBalanceInfo'
export interface ExpensesSliceState{
  expenses: Expense[];
  totalBalance: number;
}

const initialState: ExpensesSliceState = {
  expenses: expenses, // The first expenses is the value of the state, and the second expenses is an array of 'expense' objects called from an external file. In a real world application, we would need to call this data from the database.
  totalBalance: getTotalBalance(expenses)
} 

export const expensesSlice = createSlice({
  name: 'Expenses',
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<Expense>) => {
      state.expenses.push(action.payload)
      state.totalBalance = getTotalBalance(state.expenses)
    }
  },
})

export const {addExpense} = expensesSlice.actions;
export const selectTotalBalance = (state: RootState) => state.expenses.totalBalance // I need to use the selectTotalBalance in my other components, instead of useSelector
export default expensesSlice.reducer