import { RadioRequestListScreen } from "../../../presentation/screens";
import { makeRequestUseCase } from "../usecases";

export const MakeRadioRequestListScreen = () => (
  <RadioRequestListScreen useRequest={makeRequestUseCase()} />
);
