import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import HomeContainer from './home_container/home_container';
import SearchResultsContainer from './search_results/search_results_container';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={HomeContainer} />
        <Route component={SearchResultsContainer} path="search" />
      </Route>
    </Router>
  </Provider>
);

export default Root;
