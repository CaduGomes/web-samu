import React from "react";
import { useHistory, useParams } from "react-router-dom";

import { Container } from "./styles";
import { FastQuestions, Send } from "./components";
import { TARMRequestUseCase } from "../../../domain/usecases";
import { ChatUseCase } from "core/domain/usecases";
import { MakeChat } from "main/factories/components";

type Params = {
  id: string;
};

type Props = {
  useRequest: TARMRequestUseCase;
  useChat: ChatUseCase;
};

export const TARMRequestScreen: React.FC<Props> = ({ useRequest, useChat }) => {
  const { id } = useParams<Params>();

  const history = useHistory();

  async function sendRequest(notes: string) {
    await useRequest.send({ id, notes });
    history.push("/");
  }

  async function sendQuestion(question: string, answers: string[]) {
    await useChat.post(id, question, answers);
  }

  return (
    <Container>
      <MakeChat id={id} />
      <FastQuestions
        sendQuestion={(question: string, answers: string[]) =>
          sendQuestion(question, answers)
        }
      />
      <Send sendFunction={(notes: string) => sendRequest(notes)} />
    </Container>
  );
};
