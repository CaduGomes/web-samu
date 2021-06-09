import { AmbulanceRequestModel } from "domain/models";

export interface AmbulanceRequest {
  get: () => Promise<AmbulanceRequest.Model[]>;
  getOne: (
    params: AmbulanceRequest.GetOneParams
  ) => Promise<AmbulanceRequest.Model>;
  delete: (params: AmbulanceRequest.DeleteParams) => Promise<void>;
  close: (params: AmbulanceRequest.CloseParams) => Promise<void>;
}

export declare namespace AmbulanceRequest {
  type DeleteParams = {
    id: string;
  };
  type CloseParams = {
    id: string;
  };
  type GetOneParams = {
    id: string;
  };
  type Model = AmbulanceRequestModel;
}
