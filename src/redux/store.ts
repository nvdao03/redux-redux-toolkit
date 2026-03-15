import { combineReducers, createStore } from 'redux'
import { counterReducer } from './reducer'
import { todosReducer } from './todosReducer'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import persistStore from 'redux-persist/es/persistStore'

// Cấu hình persist để lưu trữ state vào localStorage
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['counter'], // Chỉ lưu trữ state của counter vào localStorage
  blacklist: ['todos'] // Không lưu trữ state của todos vào localStorage
}

// Gộp nhiều reducer thành một root reducer
const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer
})

// Tạo một reducer mới đã được persist để lưu trữ state vào localStorage
const persistedReducer = persistReducer(persistConfig, rootReducer)

// Tạo store từ root reducer, store chỉ chưa 1 reducer
export const store = createStore(persistedReducer)

// Tạo persistor để quản lý việc lưu trữ state vào localStorage
export const persistor = persistStore(store)

// Định nghĩa kiểu RootState dựa trên rootReducer => để sử dụng trong useSelector để lấy state từ store
export type RootState = ReturnType<typeof rootReducer>

// Định nghĩa kiểu AppDispatch dựa trên store.dispatch => để sử dụng trong useDispatch để dispatch action lên store
export type AppDispatch = typeof store.dispatch
