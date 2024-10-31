import { useAppDispatch, useAppSelector } from '../app/hooks'
import { incremented, amountAdded } from '../features/counter/counter-slice'

const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <>
      <h1>Counter App</h1>
      
      <button onClick={() => dispatch(incremented())}>count is {count}</button> &nbsp;
      
      <button onClick={() => dispatch(amountAdded(5))}>count five</button>
    </>
  )
}

export default Counter