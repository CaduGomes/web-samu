import { ChatRepositoryImpl } from "data/repositories";
import { ChatUseCase } from "domain/usecases";

export const makeChatUseCase = () => new ChatUseCase(new ChatRepositoryImpl());
