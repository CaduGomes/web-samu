import { makeChatUseCase } from "main/factories/usecases";
import { MedicoRequestScreen } from "../../../presentation/screens";
import { makeRequestUseCase } from "../usecases";

export const MakeMedicoRequestScreen = () => (
  <MedicoRequestScreen
    useChat={makeChatUseCase()}
    useRequests={makeRequestUseCase()}
  />
);
