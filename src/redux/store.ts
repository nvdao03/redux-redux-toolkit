import { combineReducers, createStore } from 'redux'
import { counterReducer } from './reducer'
import { todosReducer } from './todosReducer'

// Gộp nhiều reducer thành một root reducer
const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer
})

// Tạo store từ root reducer, store chỉ chưa 1 reducer
export const store = createStore(rootReducer)

// Định nghĩa kiểu RootState dựa trên rootReducer => để sử dụng trong useSelector để lấy state từ store
export type RootState = ReturnType<typeof rootReducer>

// Định nghĩa kiểu AppDispatch dựa trên store.dispatch => để sử dụng trong useDispatch để dispatch action lên store
export type AppDispatch = typeof store.dispatch
