import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
  count: number
}

export const initialState: CounterState = {
  count: 0
}

export const countSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    }
  }
})

// Export các action creator được tạo ra bởi createSlice để sử dụng trong components
export const { increment, decrement } = countSlice.actions

// Export reducer để sử dụng trong store
export default countSlice.reducer
