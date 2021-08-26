import React, { FC } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Container, makeStyles, createStyles } from "@material-ui/core";

import { RegisterPage, LoginPage } from "./pages";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      height: "100vh",
      display: "flex",
      alignItems: "center",
    },
  })
);

export const App: FC = () => {
  const classes = useStyles();

  return (
    <Router>
      <Switch>
        <Container className={classes.container} maxWidth='xs'>
          <Route exact path='/'>
            <Redirect to='/login' />
          </Route>

          <Route path='/login' exact>
            <LoginPage />
          </Route>

          <Route path='/register' exact>
            <RegisterPage />
          </Route>
        </Container>
      </Switch>
    </Router>
  );
};

export default App;
