import { RadioRequestEntity } from "../entities";

export interface RadioRequestRepository {
  get: () => Promise<RadioRequestRepository.Model[]>;
  getOne: (
    params: RadioRequestRepository.GetOneParams
  ) => Promise<RadioRequestRepository.Model>;
  close: (params: RadioRequestRepository.CloseParams) => Promise<void>;
  send: (params: RadioRequestRepository.SendParams) => Promise<void>;
}

export declare namespace RadioRequestRepository {
  type GetOneParams = {
    id: string;
  };
  type SendParams = {
    id: string;
  };
  type CloseParams = {
    id: string;
  };
  type Model = RadioRequestEntity;
}
