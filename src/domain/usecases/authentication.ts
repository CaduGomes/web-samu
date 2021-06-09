import { UserModel } from "domain/models";

export interface Authentication {
  signIn: (params: Authentication.SignIn) => Promise<void>;
  signOut: () => Promise<void>;
}

export declare namespace Authentication {
  type SignIn = {
    email: string;
    password: string;
  };
  type Model = UserModel;
}
