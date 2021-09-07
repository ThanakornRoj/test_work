import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Homepage from "../homepage";
import ProgressBar from "../progressBar";
import DrawTriangle from "../triangle";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/progress-bar" component={ProgressBar} />
      <Route exact path="/triangle" component={DrawTriangle} />
    </Switch>
  </BrowserRouter>
);

export default Router;
