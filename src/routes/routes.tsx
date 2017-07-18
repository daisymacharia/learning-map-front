import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { ContributionPage } from '../pages/contributions/ContributionPage.component';
import { HomePage } from '../pages/home/HomePage.component';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" component={ HomePage } />
        <Route  path="/contributions" component={ ContributionPage } />
      </Switch>
    </Router>
  </Provider>
);

export default Root;
