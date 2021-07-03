import { AmbulanceRequestRepository } from "domain/repositories";

export class AmbulanceRequestUseCase {
  constructor(
    private readonly AmbulanceRequestClient: AmbulanceRequestRepository
  ) {}

  async get(): Promise<AmbulanceRequestRepository.Model[]> {
    try {
      const ambulanceRequests = await this.AmbulanceRequestClient.get();

      return ambulanceRequests;
    } catch (err) {
      throw new Error("Erro ao pegar os itens");
    }
  }

  async getOne({
    id,
  }: AmbulanceRequestRepository.GetOneParams): Promise<AmbulanceRequestRepository.Model> {
    try {
      const ambulanceRequests = await this.AmbulanceRequestClient.getOne({
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
