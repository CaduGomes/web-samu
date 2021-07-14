import { RadioRequestRepository } from "../repositories";

export class RadioRequestUseCase {
  constructor(
    private readonly radioRequestRepository: RadioRequestRepository
  ) {}

  async get(): Promise<RadioRequestRepository.Model[]> {
    try {
      const requests = await this.radioRequestRepository.get();

      return requests;
    } catch (err) {
      throw new Error("Erro ao pegar os itens");
    }
  }

  async getOne(id: string): Promise<RadioRequestRepository.Model> {
    try {
      const request = await this.radioRequestRepository.getOne({ id });
      return request;
    } catch (e) {
      throw new Error(e);
    }
  }

  async close({ id }: RadioRequestRepository.CloseParams): Promise<void> {
    try {
      await this.radioRequestRepository.close({ id });
    } catch (err) {
      throw new Error("Erro ao encerrar a requisição");
    }
  }

  async send({ id }: RadioRequestRepository.SendParams): Promise<void> {
    try {
      await this.radioRequestRepository.send({ id });
    } catch (err) {
      throw new Error("Erro ao enviar para o médico regulador");
    }
  }
}
