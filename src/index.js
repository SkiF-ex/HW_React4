import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/style.css';
import FullPage from './featues/homepage/fullPage';
import rootReducer from './core/rootReducer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter} from 'react-router-dom';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render (
  <BrowserRouter>
    <Provider store={store}>
      <FullPage />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);