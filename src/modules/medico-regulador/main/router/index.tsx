import React from "react";
import { Route } from "react-router-dom";

import {
  MakeMedicoRequestListScreen,
  MakeMedicoRequestScreen,
} from "../factory/screens";

export default function MedicoRouter() {
  return (
    <>
      <Route component={MakeMedicoRequestListScreen} exact path="/" />
      <Route component={MakeMedicoRequestScreen} exact path="/request/:id" />
    </>
  );
}
