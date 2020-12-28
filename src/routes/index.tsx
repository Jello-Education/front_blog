import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Coming from '../pages/Coming';
import AboutJello from '../pages/AboutJello';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/coming" component={Coming} />
    <Route path="/about-jello" component={AboutJello} />
  </Switch>
);

export default Routes;
