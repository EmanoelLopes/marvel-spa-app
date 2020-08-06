import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as Pages from 'pages';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Pages.Home />
        </Route>
        <Route path="/hero/:id" children={<Pages.Hero />} />
        <Route path="*">
          <Pages.NotMatch />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
