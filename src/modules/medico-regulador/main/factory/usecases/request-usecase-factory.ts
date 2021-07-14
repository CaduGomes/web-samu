import { RequestRepositoryImpl } from "modules/medico-regulador/data/repositories";
import { RequestUseCase } from "../../../domain/usecases";

export const makeRequestUseCase = () =>
  new RequestUseCase(new RequestRepositoryImpl());
