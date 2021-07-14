import React from "react";
import { Route } from "react-router-dom";

import {
  MakeRadioRequestListScreen,
  MakeRadioRequestScreen,
} from "../factory/screens";

export default function RadioRouter() {
  return (
    <>
      <Route component={MakeRadioRequestListScreen} exact path="/" />
      <Route component={MakeRadioRequestScreen} exact path="/request/:id" />
    </>
  );
}
