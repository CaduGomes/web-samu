import { RequestEntity } from "../entities/request-entity";

export interface RequestRepository {
  get: () => Promise<RequestRepository.Model[]>;
  getOne: (
    params: RequestRepository.GetOneParams
  ) => Promise<RequestRepository.Model>;
  close: (params: RequestRepository.CloseParams) => Promise<void>;
  send: (params: RequestRepository.SendParams) => Promise<void>;
}

export declare namespace RequestRepository {
  type GetOneParams = {
    id: string;
  };
  type SendParams = {
    id: string;
  };
  type CloseParams = {
    id: string;
  };
  type Model = RequestEntity;
}
