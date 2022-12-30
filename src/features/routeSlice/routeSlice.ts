import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

export interface RouteSliceState{
  route: string
}

const initialState: RouteSliceState = {
  route: '/'
} 

export const routeSlice = createSlice({
  name: 'Routes',
  initialState,
  reducers: {
    updateRoute: (state, action: PayloadAction<string>) => {
        state.route = action.payload
    }
  },
})

export const {updateRoute} = routeSlice.actions;
export const selectRoute = (state: RootState) => state.updateRoute // I need to use the selectTotalBalance in my other components, instead of useSelector
export default routeSlice.reducer