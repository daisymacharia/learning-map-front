import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import DummyComponent from '../components/dummy/dummy.component';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={ DummyComponent } />
    </Router>
  </Provider>
);

export default Root;
