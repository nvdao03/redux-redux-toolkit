import type { TodoType } from '../types/todo.type'
import { TYPES } from './types'

export interface TodoState {
  todos: TodoType[]
}

const initialState: TodoState = {
  todos: []
}

export const todosReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case TYPES.ADD_TODO: {
      return {
        todos: [...state.todos, action.payload]
      }
    }
    case TYPES.DELETE_TODO: {
      return {
        todos: state.todos.filter((todo: TodoType) => todo.id !== action.payload)
      }
    }
    case TYPES.UPDATE_TODO: {
      const { id, todo } = action.payload
      return {
        todos: state.todos.map((item: TodoType) => (item.id === id ? { ...item, ...todo } : item))
      }
    }
    default:
      return state
  }
}
