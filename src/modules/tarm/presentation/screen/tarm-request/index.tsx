import React from "react";
import useSWR from "swr";
import { useParams } from "react-router-dom";

import { Container } from "./styles";
import { ChatComponent } from "./components";
import { RequestUseCase } from "../../../domain/usecases";
import { ChatUseCase } from "core/domain/usecases";

type Params = {
  id: string;
};

type Props = {
  useRequest: RequestUseCase;
  useChat: ChatUseCase;
};

export const TARMRequestScreen: React.FC<Props> = ({ useRequest, useChat }) => {
  const { id } = useParams<Params>();
  const { data } = useSWR(id, (id) => useRequest.getOne(id));

  return (
    <Container>
      <ChatComponent id={id} useChat={useChat} />
    </Container>
  );
};
