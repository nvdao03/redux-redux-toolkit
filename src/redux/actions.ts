import type { TodoType } from '../types/todo.type'
import { TYPES } from './types'

export const increaseCount = (payload: number) => {
  return {
    type: TYPES.INCREASE_COUNT,
    payload
  }
}

export const decreaseCount = () => {
  return {
    type: TYPES.DECREASE_COUNT
  }
}

export const addTodo = (payload: TodoType) => {
  return {
    type: TYPES.ADD_TODO,
    payload
  }
}

export const deleteTodo = (payload: number) => {
  return {
    type: TYPES.DELETE_TODO,
    payload
  }
}

export const updateTodo = (payload: { id: number; todo: TodoType }) => {
  return {
    type: TYPES.UPDATE_TODO,
    payload
  }
}
