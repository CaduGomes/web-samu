import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useSWR from "swr";
import { AmbulanceRequest } from "domain/usecases";
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

type Params = {
  id: string;
};

type Props = {
  useRequests: AmbulanceRequest;
};

export const RequestScreen: React.FC<Props> = ({ useRequests }) => {
  const { id } = useParams<Params>();
  const [userLocation, setUserLocation] = useState<Geopoint>({
    latitude: 0,
    longitude: 0,
  });

  const { data, error } = useSWR(id, (id) => useRequests.getOne({ id }), {
    refreshInterval: 5000,
  });

  useEffect(() => {
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
            <Title>Imagens</Title>
            <ImagesContainer images={data.images} />
          </ImagesArea>
          <ChatArea>
            <Title>Chat</Title>
            <ChatContainer />
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
