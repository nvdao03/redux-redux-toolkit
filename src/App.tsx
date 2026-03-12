import { decreaseCount, increaseCount } from './redux/Actions'
import { useDispatch, useSelector } from 'react-redux'
import type { CounterState } from './redux/reducer'

function App() {
  const dispatch = useDispatch()
  const count = useSelector((state: CounterState) => state.count)

  const handleIncrement = () => {
    dispatch(increaseCount())
  }

  const handleDecrement = () => {
    dispatch(decreaseCount())
  }

  return (
    <div>
      <div className='flex flex-col items-center gap-4 mt-10'>
        <h1>Redux - Redux Toolkit</h1>
        <h4>Count: {count}</h4>
        <div className='flex gap-2'>
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleDecrement}>Decrement</button>
        </div>
      </div>
    </div>
  )
}

export default App
