import { RequestRepository } from "../repositories/request-repository";

export class RequestUseCase {
  constructor(private readonly requestRepository: RequestRepository) {}

  async get(): Promise<RequestRepository.Model[]> {
    try {
      const requests = await this.requestRepository.get();

      return requests;
    } catch (err) {
      throw new Error("Erro ao pegar os itens");
    }
  }

  async getOne(id: string): Promise<RequestRepository.Model> {
    try {
      const request = await this.requestRepository.getOne({ id });
      return request;
    } catch (e) {
      throw new Error(e);
    }
  }

  async close({ id }: RequestRepository.CloseParams): Promise<void> {
    try {
      await this.requestRepository.close({ id });
    } catch (err) {
      throw new Error("Erro ao encerrar a requisição");
    }
  }

  async send({ id }: RequestRepository.SendParams): Promise<void> {
    try {
      await this.requestRepository.send({ id });
    } catch (err) {
      throw new Error("Erro ao enviar para o médico regulador");
    }
  }
}
