import { actions } from './slice';
import { useAppDispatch, useAppSelector } from './hooks';

export default function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <>
      <p>{count}</p>
      <button onClick={() => dispatch(actions.increment())}>+</button>{' '}
      <button onClick={() => dispatch(actions.decrement())}>-</button>
    </>
  );
}
