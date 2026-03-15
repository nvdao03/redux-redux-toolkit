import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from './redux/store'
import Todos from './pages/Todos'
import { decrement, increment } from './redux/counterSlice'

function App() {
  const dispatch = useDispatch()
  const counter = useSelector((state: RootState) => state.counter.count)

  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }

  return (
    <div>
      <div className='flex flex-col items-center gap-4 mt-10'>
        <h1>Redux - Redux Toolkit</h1>
        <h4>Count: {counter}</h4>
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
