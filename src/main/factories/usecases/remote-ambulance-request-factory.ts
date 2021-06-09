import { RemoteAmbulanceRequest } from "data/usecases";
import { makeFirebaseAmbulanceRequestClient } from "../http-client/firebase";

export const makeRemoteAmbulanceRequest = () =>
  new RemoteAmbulanceRequest(makeFirebaseAmbulanceRequestClient());
