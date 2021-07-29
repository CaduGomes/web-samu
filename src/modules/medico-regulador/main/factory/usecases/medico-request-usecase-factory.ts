import { MedicoRequestRepositoryImpl } from "modules/medico-regulador/data/repositories";
import { MedicoRequestUseCase } from "../../../domain/usecases";

export const makeRequestUseCase = () =>
  new MedicoRequestUseCase(new MedicoRequestRepositoryImpl());
