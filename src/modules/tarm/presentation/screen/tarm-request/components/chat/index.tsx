import React from "react";
import { IObserver, ISubject } from "core/observer";
import { ChatRepositoryImpl } from "core/data/repositories";
import { ChatUseCase } from "core/domain/usecases";
import { MessageEntity } from "core/domain/entities";

import {
  Container,
  Input,
  InputContainer,
  Message,
  MessagesContainer,
  Chat,
} from "./styles";

type Props = {
  useChat: ChatUseCase;
  id: string;
};

type State = {
  data: MessageEntity[];
  message: string;
  focus: boolean;
  newMessages: number;
};

export class ChatComponent extends React.Component<Props> implements IObserver {
  constructor(props: Props) {
    super(props);
    this.sendMessage = this.sendMessage.bind(this);
  }

  state: State = {
    data: [],
    message: "",
    focus: true,
    newMessages: 0,
  };

  async sendMessage() {
    await this.props.useChat.post(this.props.id, this.state.message);
    this.setState({ message: "" });
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    var element = document.getElementById("scrollingContainer");
    if (element) {
      element.scrollTop = element.scrollHeight;
    }
  };

  componentDidMount() {
    this.props.useChat.attach(this);
    this.props.useChat.watch(this.props.id);
    window.addEventListener("blur", () => this.setState({ focus: false }));
    window.addEventListener("focus", () => {
      this.setState({ focus: true, newMessages: 0 });
      document.title = "Solicitação";
    });
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  componentWillUnmount() {
    this.props.useChat.detach(this);
  }

  update(subject: ISubject) {
    if (subject instanceof ChatRepositoryImpl) {
      console.log(subject.messages);
      this.setState({
        data: subject.messages,
      });
      if (!this.state.focus) {
        this.setState({
          newMessages: this.state.newMessages + 1,
        });
        document.title = `(${this.state.newMessages}) Solicitação`;
        if (Notification.permission === "granted") {
          if (subject.messages) {
            new Notification("Nova mensagem", {
              body: subject.messages[0].text,
            });
          }
        }
      }
    }
  }

  render() {
    return (
      <Container>
        <Chat id="scrollingContainer">
          <MessagesContainer>
            {!this.state.data ? (
              <p>Error</p>
            ) : this.state.data.length > 0 ? (
              this.state.data.map((message, index) => (
                <Message
                  key={`message-${index}`}
                  id={`message-${index}`}
                  index={index}
                  direction={message.direction}
                >
                  <p>{message.text}</p>
                </Message>
              ))
            ) : null}
          </MessagesContainer>
        </Chat>
        <InputContainer>
          <Input
            name="message"
            onChange={(e) => this.setState({ message: e.target.value })}
            value={this.state.message}
            required
            placeholder="Escreva sua mensagem"
          />
          <button onClick={this.sendMessage}>Enviar</button>
        </InputContainer>
      </Container>
    );
  }
}
