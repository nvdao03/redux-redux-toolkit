import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import todoReducer from './todosSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer
  }
})

// Định nghĩa kiểu RootState dựa trên rootReducer => để sử dụng trong useSelector để lấy state từ store
export type RootState = ReturnType<typeof store.getState>

// Định nghĩa kiểu AppDispatch dựa trên store.dispatch => để sử dụng trong useDispatch để dispatch action lên store
export type AppDispatch = typeof store.dispatch
