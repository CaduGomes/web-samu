import { UserRoleEntity } from "modules/auth/domain/entities/user-role-entity";
import React, { useContext } from "react";
import { UserEntity } from "../../../domain/entities";

type ContextType = {
  user: UserEntity | null;
  role: UserRoleEntity | null;
  loading: boolean;
  setRole: (role: UserRoleEntity) => void;
};

export const AuthContext = React.createContext<ContextType>({
  user: null,
  loading: true,
  role: "TARM",
  setRole: () => {},
});

export const useAuth = () => useContext(AuthContext);
