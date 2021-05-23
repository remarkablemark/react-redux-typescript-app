import { useDispatch, useSelector } from 'react-redux';
import { actions } from './slice';
import type { RootState } from './store';

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <p>{count}</p>
      <button onClick={() => dispatch(actions.increment())}>+</button>{' '}
      <button onClick={() => dispatch(actions.decrement())}>-</button>
    </>
  );
}
