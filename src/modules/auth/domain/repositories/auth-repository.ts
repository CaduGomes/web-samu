import { ISubject } from "core/observer";
import { UserEntity } from "../entities";

export interface AuthRepository extends ISubject {
  signIn: (params: AuthRepository.SignIn) => Promise<void>;
  signOut: () => Promise<void>;
  autoSignIn: () => Promise<void>;
}

export declare namespace AuthRepository {
  type SignIn = {
    email: string;
    password: string;
  };
  type Model = UserEntity;
}
