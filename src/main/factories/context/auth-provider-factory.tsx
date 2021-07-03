import React from "react";
import { AuthProvider } from "data/context/auth";
import { makeAuthUseCase } from "../usecases";

export const MakeAuthProvider: React.FC = ({ children }) => (
  <AuthProvider children={children} authCliente={makeAuthUseCase()} />
);
