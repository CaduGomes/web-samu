import React from "react";
import { useParams } from "react-router";
import useSWR from "swr";

import {
  ChatContainer,
  DataContainer,
  ImagesContainer,
  SendContainer,
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
import { MedicoRequestUseCase } from "../../../domain/usecases";
import { MapView } from "core/components";
import { useHistory } from "react-router-dom";

type Params = {
  id: string;
};

type Props = {
  useRequests: MedicoRequestUseCase;
  useChat: ChatUseCase;
};

export const MedicoRequestScreen: React.FC<Props> = ({
  useRequests,
  useChat,
}) => {
  const { id } = useParams<Params>();
  const history = useHistory();

  const { data, error } = useSWR(
    "medico-request-" + id,
    () => useRequests.getOne(id),
    {
      refreshInterval: 10000,
    }
  );

  async function sendRequest(notes: string) {
    await useRequests.send({
      id,
      notes,
    });
    history.push("/");
  }

  async function cancelRequest() {
    await useRequests.close({ id });
    history.push("/");
  }

  return (
    <Container>
      {!data && !error ? (
        <p>Loading...</p>
      ) : data ? (
        <>
          <DataArea>
            <Title>Dados</Title>
            <DataContainer id={id} createAt={data.createAt.toLocaleString()} />
          </DataArea>
          <SendContainer
            cancelRequest={cancelRequest}
            initialNotes={data.notes}
            sendRequest={(notes: string) => sendRequest(notes)}
          />
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
