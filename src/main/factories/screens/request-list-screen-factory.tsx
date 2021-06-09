import React from "react";
import { RequestListScreen } from "presentation/screen";
import {
  makeRemoteAmbulanceRequest,
  makeRemoteAuthentication,
} from "main/factories/usecases";

export const MakeRequestListScreen: React.FC = () => (
  <RequestListScreen
    useRequests={makeRemoteAmbulanceRequest()}
    useAuththentication={makeRemoteAuthentication()}
  />
);
