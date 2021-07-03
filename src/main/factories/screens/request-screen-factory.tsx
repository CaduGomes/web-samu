import React from "react";
import { RequestScreen } from "presentation/screen";
import { makeAmbulanceRequestUseCase, makeChatUseCase } from "../usecases";

export const MakeRequestScreen: React.FC = () => (
  <RequestScreen
    useRequests={makeAmbulanceRequestUseCase()}
    useChat={makeChatUseCase()}
  />
);
