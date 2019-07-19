import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

/* Components */
import Home from './Home/Home';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Home} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('#root'))