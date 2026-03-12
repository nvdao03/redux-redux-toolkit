import { TYPES } from './types'

export const increaseCount = () => {
  return {
    type: TYPES.INCREASE_COUNT
  }
}

export const decreaseCount = () => {
  return {
    type: TYPES.DECREASE_COUNT
  }
}
