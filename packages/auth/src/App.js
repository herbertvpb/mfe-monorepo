import React from "react";
import { Switch, Route, Router as MemoryRouter } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

// import Landing from "./components/Landing";
// import Pricing from "./components/Pricing";

const generateClassName = createGenerateClassName({
  productionPrefix: "auth",
});

export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <MemoryRouter history={history}>
          <Switch></Switch>
        </MemoryRouter>
      </StylesProvider>
    </div>
  );
};
