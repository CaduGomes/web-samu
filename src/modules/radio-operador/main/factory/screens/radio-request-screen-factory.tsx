import { RadioRequestScreen } from "../../../presentation/screens";
import { makeRadioRequestUseCase } from "../usecases";

export const MakeRadioRequestScreen = () => (
  <RadioRequestScreen useRequest={makeRadioRequestUseCase()} />
);
