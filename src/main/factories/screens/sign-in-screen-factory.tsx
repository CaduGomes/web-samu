import React from "react";
import { SignInScreen } from "presentation/screen";
import { makeAuthUseCase } from "main/factories/usecases";

export const MakeSignInScreen: React.FC = () => (
  <SignInScreen useAuthentication={makeAuthUseCase()} />
);
