import { RequestRepositoryImpl } from "../../../data/repositories";
import { RequestUseCase } from "../../../domain/usecases";

export const makeRequestUseCase = () =>
  new RequestUseCase(new RequestRepositoryImpl());
