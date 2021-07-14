import { PersistRoleRepository } from "modules/auth/domain/repositories";

import { UserRoleEntity } from "../../domain/entities";

export class PersistRoleRepositoryImpl implements PersistRoleRepository {
  constructor(readonly key: string) {}
  save({ role }: PersistRoleRepository.SaveParams): void {
    try {
      localStorage.setItem(this.key, role);
    } catch (err) {
      throw new Error("Ocorreu um erro ao salvar os dados");
    }
  }
  restore(): PersistRoleRepository.Model {
    try {
      const Role = localStorage.getItem(this.key);

      if (Role) {
        const role = Role as UserRoleEntity;
        return { data: role };
      }

      return { data: null };
    } catch (err) {
      throw new Error("Ocorreu um erro ao recuperar os dados");
    }
  }
  remove(): void {
    try {
      localStorage.removeItem(this.key);
    } catch (err) {
      throw new Error(err);
    }
  }
}
