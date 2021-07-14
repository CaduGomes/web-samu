import { TARMRequestRepository } from "../repositories";

export class RequestUseCase {
  constructor(private readonly requestRepository: TARMRequestRepository) {}

  async get(): Promise<TARMRequestRepository.Model[]> {
    try {
      const requests = await this.requestRepository.get();

      return requests;
    } catch (err) {
      throw new Error("Erro ao pegar os itens");
    }
  }

  async getOne(id: string): Promise<TARMRequestRepository.Model> {
    try {
      const request = await this.requestRepository.getOne({ id });
      return request;
    } catch (e) {
      throw new Error(e);
    }
  }

  async close({ id }: TARMRequestRepository.CloseParams): Promise<void> {
    try {
      await this.requestRepository.close({ id });
    } catch (err) {
      throw new Error("Erro ao encerrar a requisição");
    }
  }

  async send({ id }: TARMRequestRepository.SendParams): Promise<void> {
    try {
      await this.requestRepository.send({ id });
    } catch (err) {
      throw new Error("Erro ao enviar para o médico regulador");
    }
  }
}
