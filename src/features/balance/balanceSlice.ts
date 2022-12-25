import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import { Expense } from '../../types/expense'
import { Category } from '../../types/category'


// Define a type for the slice state
// interface BalanceState {
//   value: number
// }

// // Define the initial state using that type
// const initialState: BalanceState = {
//   value: 0,
// }


  
type State = {
    expense: Expense[]
}

// const initialState = {
//     date: Date.now,
//     category: null,
//     title: '',
//     value: 0
// }

export type RequiredValues = {
    incomeCountArgument: number,
    expenseCountArgument: number, 
}

const initialState: RequiredValues = {
    incomeCountArgument: 0,
    expenseCountArgument: 0,
}

// addExpense(state, action: PayloadAction<Expense>) {
//     const expense = action.payload;
//     state.user.expenses.push(expense);
//     state.user.totalBalance -= expense.amount;
//   }

  
export const balanceSlice = createSlice({
  name: 'Balance',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setTotalBalance: (state, action: PayloadAction[RequiredValues]) => {

        state.value = incomeCount - expenseCount
    },
    decrement: (state) => {
      state.value -= 1
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const {setTotalBalance, decrement } = balanceSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default balanceSlice.reducer


// Logic
// I need