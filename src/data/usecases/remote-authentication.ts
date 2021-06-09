import { AuthClient } from "data/protocols/http";
import { InvalidCredentialsError } from "domain/errors";
import { Authentication } from "domain/usecases";

export class RemoteAuthentication implements Authentication {
  constructor(private readonly auth: AuthClient) {}

  async signIn({ email, password }: Authentication.SignIn): Promise<void> {
    try {
      await this.auth.signUpWithEmailandPassword({ email, password });
    } catch (err) {
      throw new InvalidCredentialsError();
    }
  }
  async signOut(): Promise<void> {
    await this.auth.signOut();
  }
}
