import { ChatRepositoryImpl } from "core/data/repositories";
import { ChatUseCase } from "core/domain/usecases";

export const makeChatUseCase = () => new ChatUseCase(new ChatRepositoryImpl());
