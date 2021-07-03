import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useSWR from "swr";
import { getDistanceFromLatLonInKm, Geopoint } from "presentation/utils";

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
  NavbarContainer,
  Title,
  ImagesArea,
} from "./styles";

import { AmbulanceRequestUseCase, ChatUseCase } from "domain/usecases";

type Params = {
  id: string;
};

type Props = {
  useRequests: AmbulanceRequestUseCase;
  useChat: ChatUseCase;
};

export const RequestScreen: React.FC<Props> = ({ useRequests, useChat }) => {
  const { id } = useParams<Params>();
  const [userLocation, setUserLocation] = useState<Geopoint>({
    latitude: 0,
    longitude: 0,
  });

  const { data, error } = useSWR(id, (id) => useRequests.getOne({ id }), {
    refreshInterval: 5000,
  });

  useEffect(() => {
    document.title = "Solicitação";
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((e) => {
          setUserLocation({
            latitude: e.coords.latitude,
            longitude: e.coords.longitude,
          });
        });
      }
    }
    getLocation();
  }, []);

  return (
    <Container>
      <NavbarContainer>
        <Link to="/request-list">Voltar</Link>
      </NavbarContainer>
      {!data && !error ? (
        <p>Loading...</p>
      ) : data ? (
        <>
          <DataArea>
            <Title>Dados</Title>
            <DataContainer
              id={id}
              createAt={data.createAt.toDate().toLocaleString()}
              isOpen={data.isOpen}
              distance={getDistanceFromLatLonInKm(userLocation, data.location)}
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
              latitude={data.location.latitude}
              longitude={data.location.longitude}
            />
          </MapArea>
        </>
      ) : (
        <p>Item não encontrado!</p>
      )}
    </Container>
  );
};
