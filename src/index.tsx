import React from "react";
import { render } from "react-dom";
import { CssBaseline } from "@material-ui/core";

import { App } from "./App";

render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
