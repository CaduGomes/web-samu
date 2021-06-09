import React from "react";
import { AuthProvider } from "data/context/auth";
import { makeFirebaseCliente } from "../http-client/firebase";

export const MakeAuthProvider: React.FC = ({ children }) => (
  <AuthProvider children={children} authCliente={makeFirebaseCliente()} />
);
