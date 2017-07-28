import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, IndexRoute, Link, Route, Switch } from 'react-router-dom';
import SubmitIdeaComponent from '../components/idea-form/idea-form.component';
import { ContributionPage } from '../pages/contributions/ContributionPage.component';
import { HomePage } from '../pages/home/HomePage.component';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
      <Route exact path="/" component={ HomePage } />
      <Route path="/contributions" component={ ContributionPage } />
      </Switch>
    </Router>
  </Provider>
);

export default Root;
