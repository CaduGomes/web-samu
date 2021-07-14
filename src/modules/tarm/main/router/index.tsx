import React from "react";
import { Route } from "react-router-dom";

import {
  MakeTARMRequestListScreen,
  MakeTARMRequestScreen,
} from "../factory/screens";

export default function TARMRouter() {
  return (
    <>
      <Route component={MakeTARMRequestListScreen} exact path="/" />
      <Route component={MakeTARMRequestScreen} exact path="/request/:id" />
    </>
  );
}
