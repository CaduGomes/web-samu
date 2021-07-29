import { RequestRepositoryImpl } from "modules/tarm/data/repositories";
import { TARMRequestUseCase } from "modules/tarm/domain/usecases";

export const makeTARMRequestUseCase = () =>
  new TARMRequestUseCase(new RequestRepositoryImpl());
