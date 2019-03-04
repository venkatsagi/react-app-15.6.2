import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Login from './login/login';
import Dashboard from './dashboard/dashboard';

const Root = () => (
  <Router>
    <div>
      <Route exact path="/" component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
    </div>
  </Router>
);

export default Root;
