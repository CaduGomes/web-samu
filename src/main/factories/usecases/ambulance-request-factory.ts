import { AmbulanceRequestRepositoryImpl } from "data/repositories";
import { AmbulanceRequestUseCase } from "domain/usecases";

export const makeAmbulanceRequestUseCase = () =>
  new AmbulanceRequestUseCase(new AmbulanceRequestRepositoryImpl());
