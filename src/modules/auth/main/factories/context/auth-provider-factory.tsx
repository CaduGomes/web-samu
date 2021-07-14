import React from "react";
import { AuthProvider } from "modules/auth/data/context/auth";
import { makeAuthUseCase } from "../usecases";
import { makePersistRoleUseCase } from "../usecases/persist-role-factory";

export const MakeAuthProvider: React.FC = ({ children }) => (
  <AuthProvider
    children={children}
    authCliente={makeAuthUseCase()}
    persistRoleClient={makePersistRoleUseCase()}
  />
);
