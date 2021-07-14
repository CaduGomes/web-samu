import { makeChatUseCase } from "main/factories/usecases";
import { TARMRequestScreen } from "../../../presentation/screen";
import { makeRequestUseCase } from "../usecases";

export const MakeTARMRequestScreen: React.FC = () => (
  <TARMRequestScreen
    useRequest={makeRequestUseCase()}
    useChat={makeChatUseCase()}
  />
);
