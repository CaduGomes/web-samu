import { ChatComponent } from "core/components";
import { makeChatUseCase } from "../usecases";

type Props = {
  id: string;
};

export const MakeChat: React.FC<Props> = ({ id }) => (
  <ChatComponent id={id} useChat={makeChatUseCase()} />
);
