import { RemoteAuthentication } from "data/usecases";
import { Authentication } from "domain/usecases";
import { makeFirebaseCliente } from "../http-client/firebase";

export const makeRemoteAuthentication = (): Authentication =>
  new RemoteAuthentication(makeFirebaseCliente());
