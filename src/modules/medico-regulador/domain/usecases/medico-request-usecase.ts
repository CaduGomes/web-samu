import { MedicoRequestRepository } from "../repositories";

export class RequestUseCase {
  constructor(
    private readonly MedicoRequestRepository: MedicoRequestRepository
  ) {}

  async get(): Promise<MedicoRequestRepository.Model[]> {
    try {
      const requests = await this.MedicoRequestRepository.get();

      return requests;
    } catch (err) {
      throw new Error("Erro ao pegar os itens");
    }
  }

  async getOne(id: string): Promise<MedicoRequestRepository.Model> {
    try {
      const request = await this.MedicoRequestRepository.getOne({ id });
      return request;
    } catch (e) {
      throw new Error(e);
    }
  }

  async close({ id }: MedicoRequestRepository.CloseParams): Promise<void> {
    try {
      await this.MedicoRequestRepository.close({ id });
    } catch (err) {
      throw new Error("Erro ao encerrar a requisição");
    }
  }

  async send({ id }: MedicoRequestRepository.SendParams): Promise<void> {
    try {
      await this.MedicoRequestRepository.send({ id });
    } catch (err) {
      throw new Error("Erro ao enviar para o médico regulador");
    }
  }
}
