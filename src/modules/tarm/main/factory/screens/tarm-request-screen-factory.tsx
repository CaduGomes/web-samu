import { makeChatUseCase } from "main/factories/usecases";
import { TARMRequestScreen } from "../../../presentation/screen";
import { makeTARMRequestUseCase } from "../usecases";

export const MakeTARMRequestScreen: React.FC = () => (
  <TARMRequestScreen
    useRequest={makeTARMRequestUseCase()}
    useChat={makeChatUseCase()}
  />
);
