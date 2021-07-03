import { AuthUseCase } from "domain/usecases";
import { AuthRepositoryImpl } from "data/repositories";

export const makeAuthUseCase = () => new AuthUseCase(new AuthRepositoryImpl());
