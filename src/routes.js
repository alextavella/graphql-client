import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home, Product } from './pages';

export default function src() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/product" component={Product} />
      </Switch>
    </BrowserRouter>
  );
}
