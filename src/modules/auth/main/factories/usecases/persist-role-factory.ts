import { PersistRoleRepositoryImpl } from "modules/auth/data/repositories";
import { PersistRoleUseCase } from "modules/auth/domain/usecases";

export const makePersistRoleUseCase = () =>
  new PersistRoleUseCase(new PersistRoleRepositoryImpl("@web-samu/role"));
