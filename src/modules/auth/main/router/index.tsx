import React from "react";
import { useAuth } from "modules/auth/data/context/auth";
import {
  MakeSelectFunctionScreen,
  MakeSignInScreen,
} from "../factories/screens";

export default function AuthRouter() {
  const { user } = useAuth();

  if (!user?.uid) {
    return <MakeSignInScreen />;
  }

  return <MakeSelectFunctionScreen />;
}
