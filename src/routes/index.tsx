import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Coming from '../pages/Coming';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/coming" component={Coming} />
  </Switch>
);

export default Routes;
