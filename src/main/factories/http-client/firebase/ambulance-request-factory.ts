import { FirebaseAmbulanceRequestClient } from "infra/http";

export const makeFirebaseAmbulanceRequestClient = () =>
  new FirebaseAmbulanceRequestClient();
