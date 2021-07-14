import { AuthUseCase } from "../../../domain/usecases";
import {
  AuthRepositoryImpl,
  PersistRoleRepositoryImpl,
} from "../../../data/repositories";

export const makeAuthUseCase = () =>
  new AuthUseCase(
    new AuthRepositoryImpl(),
    new PersistRoleRepositoryImpl("@web-samu/role")
  );
