import { MessageModel } from "domain/models";

export interface ChatClient {
  get: (params: ChatClient.Get) => Promise<ChatClient.Model[]>;
  watch: (params: ChatClient.Watch) => void;
  post: (params: ChatClient.Post) => Promise<void>;
}

export declare namespace ChatClient {
  type Post = {
    text: string;
    id: string;
  };
  type Watch = {
    id: string;
    update: (messages: MessageModel[]) => void;
  };
  type Get = {
    id: string;
  };
  type Model = MessageModel;
}
