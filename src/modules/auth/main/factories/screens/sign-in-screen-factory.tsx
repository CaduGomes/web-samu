import React from "react";
import { makeAuthUseCase } from "../usecases";
import { SignInScreen } from "../../../presentation/screen";

export const MakeSignInScreen: React.FC = () => (
  <SignInScreen useAuthentication={makeAuthUseCase()} />
);
