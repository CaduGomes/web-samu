import React from "react";
import { RequestListScreen } from "presentation/screen";
import {
  makeAmbulanceRequestUseCase,
  makeAuthUseCase,
} from "main/factories/usecases";

export const MakeRequestListScreen: React.FC = () => (
  <RequestListScreen
    useRequests={makeAmbulanceRequestUseCase()}
    useAuththentication={makeAuthUseCase()}
  />
);
