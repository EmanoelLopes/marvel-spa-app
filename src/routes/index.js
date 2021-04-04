import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as Pages from 'pages';
import { PaginationContextProvider } from 'contexts/pagination/pagination.context';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <PaginationContextProvider>
            <Pages.Home />
          </PaginationContextProvider>
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
