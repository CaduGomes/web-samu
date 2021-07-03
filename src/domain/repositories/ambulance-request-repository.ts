import { AmbulanceRequestModel } from "domain/models";

export interface AmbulanceRequestRepository {
  get: () => Promise<AmbulanceRequestRepository.Model[]>;
  getOne: (
    params: AmbulanceRequestRepository.GetOneParams
  ) => Promise<AmbulanceRequestRepository.Model>;
  delete: (params: AmbulanceRequestRepository.DeleteParams) => Promise<void>;
  close: (params: AmbulanceRequestRepository.CloseParams) => Promise<void>;
}

export declare namespace AmbulanceRequestRepository {
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
