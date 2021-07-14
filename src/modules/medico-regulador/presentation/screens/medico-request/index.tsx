import React from "react";
import { useParams } from "react-router";
import useSWR from "swr";

import {
  ChatContainer,
  DataContainer,
  ImagesContainer,
  MapView,
} from "./components";

import {
  Container,
  ChatArea,
  DataArea,
  MapArea,
  Title,
  ImagesArea,
} from "./styles";

import { ChatUseCase } from "core/domain/usecases";
import { RequestUseCase } from "../../../domain/usecases";

type Params = {
  id: string;
};

type Props = {
  useRequests: RequestUseCase;
  useChat: ChatUseCase;
};

export const MedicoRequestScreen: React.FC<Props> = ({
  useRequests,
  useChat,
}) => {
  const { id } = useParams<Params>();

  const { data, error } = useSWR(id, (id) => useRequests.getOne(id), {
    refreshInterval: 10000,
  });

  async function sendRequest() {
    await useRequests.send({
      id,
    });
  }

  return (
    <Container>
      {!data && !error ? (
        <p>Loading...</p>
      ) : data ? (
        <>
          <DataArea>
            <Title>Dados</Title>
            <button onClick={sendRequest}>Enviar</button>
            <DataContainer
              id={id}
              createAt={data.createAt.toLocaleString()}
              isOpen={data.isOpen}
            />
          </DataArea>
          <ImagesArea>
            <Title>Imagens e Vídeos</Title>
            <ImagesContainer images={data.images} videos={data.videos} />
          </ImagesArea>
          <ChatArea>
            <ChatContainer useChat={useChat} id={id} />
          </ChatArea>
          <MapArea>
            <MapView
              latitude={data.location.lat}
              longitude={data.location.lng}
            />
          </MapArea>
        </>
      ) : (
        <p>Item não encontrado!</p>
      )}
    </Container>
  );
};
