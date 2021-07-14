import { RequestRepositoryImpl } from "modules/tarm/data/repositories";
import { RequestUseCase } from "modules/tarm/domain/usecases";

export const makeRequestUseCase = () =>
  new RequestUseCase(new RequestRepositoryImpl());
