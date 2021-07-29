import { MedicoRequestEntity } from "../entities";

export interface MedicoRequestRepository {
  get: () => Promise<MedicoRequestRepository.Model[]>;
  getOne: (
    params: MedicoRequestRepository.GetOneParams
  ) => Promise<MedicoRequestRepository.Model>;
  close: (params: MedicoRequestRepository.CloseParams) => Promise<void>;
  send: (params: MedicoRequestRepository.SendParams) => Promise<void>;
}

export declare namespace MedicoRequestRepository {
  type GetOneParams = {
    id: string;
  };
  type SendParams = {
    id: string;
    notes: string;
  };
  type CloseParams = {
    id: string;
  };
  type Model = MedicoRequestEntity;
}
