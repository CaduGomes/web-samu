import React, { useContext } from "react";
import { UserModel } from "domain/models";

type ContextType = {
  user: UserModel | null;
  loading: boolean;
};

export const AuthContext = React.createContext<ContextType>({
  user: null,
  loading: true,
});

export const useAuth = () => useContext(AuthContext);
