import React, { FC } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import { RegisterPage, LoginPage } from "./pages";

export const App: FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/login' />
        </Route>

        <Route path='/login' exact>
          <LoginPage />
        </Route>

        <Route path='/register' exact>
          <RegisterPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
