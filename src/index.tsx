import { StrictMode } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Counter from './Counter';
import store from './store';

render(
  <StrictMode>
    <Provider store={store}>
      <Counter />
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);
