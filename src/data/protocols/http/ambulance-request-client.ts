import { AmbulanceRequestModel } from "domain/models";

export interface AmbulanceRequestClient {
  getData: () => Promise<AmbulanceRequestModel[]>;
  getOneData: (
    params: AmbulanceRequestClient.GetOneParams
  ) => Promise<AmbulanceRequestModel>;

  closeRequest: () => Promise<void>;
}

export declare namespace AmbulanceRequestClient {
  type GetOneParams = {
    id: string;
  };
}
