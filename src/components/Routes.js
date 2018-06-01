import React from "react";
import { Route, Switch } from "react-router-dom";

import IndexPage from "../pages/index";
import AboutPage from "../pages/AboutPage";
import NotFoundPage from "../pages/NotFoundPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={IndexPage} />
      <Route path="/about" component={AboutPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default Routes;
