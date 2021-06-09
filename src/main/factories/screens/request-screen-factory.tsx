import { RequestScreen } from "presentation/screen";
import React from "react";
import { makeRemoteAmbulanceRequest } from "../usecases";

export const MakeRequestScreen: React.FC = () => (
  <RequestScreen useRequests={makeRemoteAmbulanceRequest()} />
);
