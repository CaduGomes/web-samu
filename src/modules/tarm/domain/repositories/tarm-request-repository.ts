import { TARMRequestEntity } from "../entities";

export interface TARMRequestRepository {
  get: () => Promise<TARMRequestRepository.Model[]>;
  getOne: (
    params: TARMRequestRepository.GetOneParams
  ) => Promise<TARMRequestRepository.Model>;
  close: (params: TARMRequestRepository.CloseParams) => Promise<void>;
  send: (params: TARMRequestRepository.SendParams) => Promise<void>;
}

export declare namespace TARMRequestRepository {
  type GetOneParams = {
    id: string;
  };
  type SendParams = {
    id: string;
  };
  type CloseParams = {
    id: string;
  };
  type Model = TARMRequestEntity;
}
