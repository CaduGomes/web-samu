import { IObserver } from "core/observer";
import { ChatRepository } from "../repositories";

export class ChatUseCase {
  constructor(private readonly chatClient: ChatRepository) {}

  watch(id: string) {
    this.chatClient.watch({ id });
  }

  attach(observer: IObserver): void {
    this.chatClient.attach(observer);
  }

  detach(observer: IObserver): void {
    this.chatClient.detach(observer);
  }

  async post(id: string, text: string): Promise<void> {
    try {
      await this.chatClient.post({ id, text });
    } catch (err) {
      throw new Error(err);
    }
  }
}
