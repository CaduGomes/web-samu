import { IObserver } from "core/observer";

import { InvalidCredentialsError } from "../errors";
import { AuthRepository, PersistRoleRepository } from "../repositories";

export class AuthUseCase {
  constructor(
    private readonly auth: AuthRepository,
    private readonly persistRole: PersistRoleRepository
  ) {}

  attach(observer: IObserver): void {
    this.auth.attach(observer);
  }

  detach(observer: IObserver): void {
    this.auth.detach(observer);
  }

  async autoSignIn() {
    try {
      await this.auth.autoSignIn();
    } catch (err) {
      throw new InvalidCredentialsError();
    }
  }

  async signIn({ email, password }: AuthRepository.SignIn): Promise<void> {
    try {
      await this.auth.signIn({ email, password });
    } catch (err) {
      throw new InvalidCredentialsError();
    }
  }

  async signOut(): Promise<void> {
    await this.auth.signOut();
    this.persistRole.remove();
  }
}
