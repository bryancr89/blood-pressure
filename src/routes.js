import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/Home/HomePage';
import RecordList from './containers/RecordList';
import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="history" component={RecordList}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
