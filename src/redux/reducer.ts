import { TYPES } from './types'

export interface CounterState {
  count: number
}

const initialState: CounterState = {
  count: 1
}

export const counterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case TYPES.INCREASE_COUNT: {
      return {
        count: state.count + 1
      }
    }
    case TYPES.DECREASE_COUNT: {
      return {
        count: state.count - 1
      }
    }
    default:
      return state
  }
}
