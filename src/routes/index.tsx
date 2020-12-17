import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Article from '../pages/Article';
import Home from '../pages/Home';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/article" component={Article} />
  </Switch>
);

export default Routes;
