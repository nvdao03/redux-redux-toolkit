import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './redux/store'
import Todos from './pages/Todos'
import { decrement, increment } from './redux/counterSlice'
import { fetchUserById } from './redux/thunk'

function App() {
  const dispatch = useDispatch<AppDispatch>()
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
      <hr className='my-4' />
      <div>
        <button onClick={() => dispatch(fetchUserById())}>Get All Todos</button>
      </div>
    </div>
  )
}

export default App
