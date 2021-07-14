import { ISubject } from "core/observer";
import { MessageEntity } from "../entities";

export interface ChatRepository extends ISubject {
  watch: (params: ChatRepository.Watch) => void;
  post: (params: ChatRepository.Post) => Promise<void>;
}

export declare namespace ChatRepository {
  type Post = {
    text: string;
    id: string;
  };
  type Watch = {
    id: string;
  };
  type Model = MessageEntity;
}
