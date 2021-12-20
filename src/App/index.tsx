import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NotFound from "pages/404";
import CurrencyExchange from "../pages/CurrencyExcange";
import GraphqlPage from "../pages/GraphqlPage";
import SignIn from "../pages/SignIn";
import Profile from "../pages/Profile";

interface IProps {}

const App: React.FC<IProps> = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={CurrencyExchange} />
        <Route path="/currency-exchange" component={CurrencyExchange} />
        <Route path="/graphql" component={GraphqlPage} />
        <Route path="/signin" component={SignIn} />
        <Route path="/profile" component={Profile} />

        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
