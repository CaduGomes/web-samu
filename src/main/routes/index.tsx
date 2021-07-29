import React from "react";
import { BrowserRouter, Redirect, Switch } from "react-router-dom";
import { useAuth } from "modules/auth/data/context/auth";
import { MakeNavbar } from "../factories/components";

import AuthRouter from "../../modules/auth/main/router";
import TARMRouter from "../../modules/tarm/main/router";
import MedicoRouter from "../../modules/medico-regulador/main/router";
import RadioRouter from "modules/radio-operador/main/router";

function RoleSelector() {
  const { role, user } = useAuth();
  if (user)
    switch (role) {
      case "TARM":
        return (
          <>
            <MakeNavbar />
            <div id="container">
              <TARMRouter />
            </div>
          </>
        );
      case "MEDICO_REGULADOR":
        return (
          <>
            <MakeNavbar />
            <div id="container">
              <MedicoRouter />
            </div>
          </>
        );
      case "RADIO_OPERADOR":
        return (
          <>
            <MakeNavbar />
            <div id="container">
              <RadioRouter />
            </div>
          </>
        );
      default:
        return <AuthRouter />;
    }

  return (
    <>
      <Redirect to="/" />
      <AuthRouter />
    </>
  );
}

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <RoleSelector />
      </Switch>
    </BrowserRouter>
  );
};
