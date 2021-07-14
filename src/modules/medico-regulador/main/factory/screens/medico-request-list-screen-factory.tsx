import { MedicoRequestListScreen } from "../../../presentation/screens";
import { makeRequestUseCase } from "../usecases";

export const MakeMedicoRequestListScreen = () => (
  <MedicoRequestListScreen useRequest={makeRequestUseCase()} />
);
