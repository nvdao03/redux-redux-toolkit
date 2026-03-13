import { decreaseCount, increaseCount } from './redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from './redux/store'
import Todos from './pages/Todos'

function App() {
  const dispatch = useDispatch()
  const count = useSelector((state: RootState) => state.counter.count)

  const handleIncrement = (data = 5) => {
    dispatch(increaseCount(data))
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
          <button onClick={() => handleIncrement()}>Increment</button>
          <button onClick={() => handleDecrement()}>Decrement</button>
        </div>
      </div>
      <hr className='my-4' />
      <Todos />
    </div>
  )
}

export default App
