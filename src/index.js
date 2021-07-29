import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux';
import App from './App';
import { Provider } from 'react-redux';
import { rootReducer } from './components/Redux/rootReducer';

const store = createStore(rootReducer, compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

