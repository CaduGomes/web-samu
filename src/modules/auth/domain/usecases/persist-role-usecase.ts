import { PersistRoleRepository } from "../repositories";

export class PersistRoleUseCase {
  constructor(private readonly persistDataRepository: PersistRoleRepository) {}
  save({ role }: PersistRoleRepository.SaveParams) {
    this.persistDataRepository.save({
      role,
    });
  }

  restore() {
    const data = this.persistDataRepository.restore();
    return data;
  }

  remove() {
    this.persistDataRepository.remove();
  }
}
