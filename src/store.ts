import { configureStore } from '@reduxjs/toolkit'
import balanceSlice from './features/balance/balanceSlice'

export const store = configureStore({
  reducer: {
    currentBalance: balanceSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch