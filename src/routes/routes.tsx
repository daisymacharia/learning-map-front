import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import { HomeComponent } from '../pages/home/home.component';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={ HomeComponent } />
    </Router>
  </Provider>
);

export default Root;
