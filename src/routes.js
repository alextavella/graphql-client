import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Product } from "./pages";

export default function src() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Product} />
      </Switch>
    </BrowserRouter>
  );
}
