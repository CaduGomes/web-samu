import { AmbulanceRequestClient } from "data/protocols/http";
import { AmbulanceRequest } from "domain/usecases";

export class RemoteAmbulanceRequest implements AmbulanceRequest {
  constructor(
    private readonly AmbulanceRequestClient: AmbulanceRequestClient
  ) {}

  async get(): Promise<AmbulanceRequest.Model[]> {
    try {
      const ambulanceRequests = await this.AmbulanceRequestClient.getData();

      return ambulanceRequests;
    } catch (err) {
      throw new Error("Erro ao pegar os itens");
    }
  }

  async getOne({
    id,
  }: AmbulanceRequest.GetOneParams): Promise<AmbulanceRequest.Model> {
    try {
      const ambulanceRequests = await this.AmbulanceRequestClient.getOneData({
        id,
      });

      return ambulanceRequests;
    } catch (err) {
      throw new Error("Erro ao pegar o item: " + id);
    }
  }

  async close() {}

  async delete() {}
}
