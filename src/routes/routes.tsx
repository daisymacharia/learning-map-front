import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import { ContributionsComponent } from '../admin/contributions/contributions.component';
import { HomeComponent } from '../pages/home/home.component';

const Root = ({ store }) => (
  <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={ HomeComponent } />
          <Route path="/admin/contributions" component={ ContributionsComponent } />
        </Switch>
      </Router>
  </Provider>
);

export default Root;
