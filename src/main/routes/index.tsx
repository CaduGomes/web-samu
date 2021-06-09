import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import {
  MakeRequestListScreen,
  MakeSignInScreen,
} from "main/factories/screens";
import { useAuth } from "data/context/auth";
import { MakeRequestScreen } from "main/factories/screens/request-screen-factory";

export const Router: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading</div>;
  }

  if (!user?.uid) {
    return <MakeSignInScreen />;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/request-list" component={MakeRequestListScreen} />
        <Route path="/request-list/:id" component={MakeRequestScreen} />

        <Route path="*">
          <Redirect to="/request-list" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
