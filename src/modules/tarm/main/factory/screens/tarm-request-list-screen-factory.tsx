import { TARMRequestListScreen } from "../../../presentation/screen";
import { makeRequestUseCase } from "../usecases/request-usecase-factory";

export const MakeTARMRequestListScreen: React.FC = () => (
  <TARMRequestListScreen useRequest={makeRequestUseCase()} />
);
