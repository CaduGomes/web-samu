import { RadioRequestRepositoryImpl } from "../../../data/repositories";
import { RadioRequestUseCase } from "../../../domain/usecases";

export const makeRadioRequestUseCase = () =>
  new RadioRequestUseCase(new RadioRequestRepositoryImpl());
