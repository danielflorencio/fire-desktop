import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import { Expense } from '../../types/expense'
import { expenses } from '../../data/expenses'
import { categories } from '../../data/categories'
export interface ExpensesSliceState{
  expenses: Expense[];
  totalBalance: number;
}

let totalBalanceInitialValue: number
let incomeCount = 0
let expenseCount = 0
for(let i = 0; i++; i < expenses.length){ // i can probably find a way of refactoring and simplifying that code. The same verification is made here and in the reducer.
  if(categories[expenses[i].category].expense === true){
    expenseCount = expenseCount + expenses[i].value  
  } else{
    incomeCount = incomeCount + expenses[i].value
  }
}
totalBalanceInitialValue = incomeCount - expenseCount

const initialState: ExpensesSliceState = {
  expenses: expenses, // The first expenses is the value of the state, and the second expenses is an array of 'expense' objects called from an external file. In a real world application, we would need to call this data from the database.
  totalBalance: totalBalanceInitialValue
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

      for(let i = 0; i < state.expenses.length; i++){
        
        if(categories[state.expenses[i].category].expense === true){
          expenseCount = expenseCount + state.expenses[i].value  
        } else{
          incomeCount = incomeCount + state.expenses[i].value
        }

      }
      state.totalBalance = incomeCount - expenseCount  
      console.log('state.total balance = ', state.totalBalance)   
    },
    // removeExpense: 
  },
})

export const {addExpense} = expensesSlice.actions;

export const selectTotalBalance = (state: RootState) => state.expenses.totalBalance // I need to use the selectTotalBalance in my other components, instead of useSelector

export default expensesSlice.reducer