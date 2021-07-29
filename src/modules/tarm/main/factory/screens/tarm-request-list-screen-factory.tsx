import { TARMRequestListScreen } from "../../../presentation/screen";
import { makeTARMRequestUseCase } from "../usecases";

export const MakeTARMRequestListScreen: React.FC = () => (
  <TARMRequestListScreen useRequest={makeTARMRequestUseCase()} />
);
