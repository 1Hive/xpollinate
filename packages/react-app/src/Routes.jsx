import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Home } from 'pages/Home';

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Redirect to="/" />
  </Switch>
);
