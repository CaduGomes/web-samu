import { TARMRequestListScreen } from "../../../presentation/screen";
import { makeRequestUseCase } from "../usecases";

export const MakeTARMRequestListScreen: React.FC = () => (
  <TARMRequestListScreen useRequest={makeRequestUseCase()} />
);
