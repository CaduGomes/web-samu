import { PersistRoleEntity } from "../entities";
import { UserRoleEntity } from "../entities/user-role-entity";

export interface PersistRoleRepository {
  save: (params: PersistRoleRepository.SaveParams) => void;
  restore: () => PersistRoleRepository.Model;
  remove: () => void;
}

export declare namespace PersistRoleRepository {
  type SaveParams = {
    role: UserRoleEntity;
  };
  type Model = PersistRoleEntity;
}
