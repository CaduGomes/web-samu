import { RadioRequestListScreen } from "../../../presentation/screens";
import { makeRadioRequestUseCase } from "../usecases";

export const MakeRadioRequestListScreen = () => (
  <RadioRequestListScreen useRequest={makeRadioRequestUseCase()} />
);
