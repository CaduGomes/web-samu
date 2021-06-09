import React from "react";
import { SignInScreen } from "presentation/screen";
import { makeRemoteAuthentication } from "main/factories/usecases";

export const MakeSignInScreen: React.FC = () => (
  <SignInScreen useAuthentication={makeRemoteAuthentication()} />
);
