import { UserModel } from "domain/models";
import { ISubject } from "../observer";

export interface AuthClient extends ISubject {
  signUpWithEmailandPassword: (
    params: AuthClient.SignUpWithEmailandPasswordParams
  ) => Promise<void>;
  signOut: () => Promise<void>;
  autoSignIn: () => Promise<void>;
}

export declare namespace AuthClient {
  type SignUpWithEmailandPasswordParams = {
    email: string;
    password: string;
  };

  type AuthStateUnsubscibe = () => void;

  type AushStateChangedParams = (userData: UserModel | null) => void;
}
