import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { TodoType } from '../types/todo.type'
import { fetchUserById } from './thunk'

export interface TodoState {
  todos: TodoType[]
}

export const initialState: TodoState = {
  todos: []
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoType>) => {
      state.todos.push(action.payload)
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo: TodoType) => todo.id !== action.payload)
    },
    updateTodo: (state, action: PayloadAction<{ id: number; todo: TodoType }>) => {
      const { id, todo } = action.payload
      const newState = { ...state }
      newState.todos = newState.todos.map((item: TodoType) => (item.id === id ? { ...item, ...todo } : item))
      return newState
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      console.log('state', state)
      console.log('action', action)
    })
  }
})

export const { addTodo, deleteTodo, updateTodo } = todosSlice.actions

export default todosSlice.reducer
