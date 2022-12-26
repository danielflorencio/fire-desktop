import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import { Expense } from '../../types/expense'
import { Category } from '../../types/category'

 

interface BalanceStateValue {
  totalBalance: number
}

interface BalanceState {
  value: BalanceStateValue
}

const initialState = {
  value: {
    totalBalance: 0
  } 
} as BalanceState;


export const balanceSlice = createSlice({
  name: 'Balance',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setTotalBalance: (state: BalanceState, action: PayloadAction<BalanceStateValue>) => {
      state.value = action.payload;
    },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

export const {setTotalBalance} = balanceSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default balanceSlice.reducer


// Logic
// I need