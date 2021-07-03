import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { Geopoint } from "presentation/utils";
import { RequestCard } from "./components";

import { Container, RequestsContainer, NavbarContainer } from "./styles";
import { AmbulanceRequestUseCase, AuthUseCase } from "domain/usecases";

type Props = {
  useRequests: AmbulanceRequestUseCase;
  useAuththentication: AuthUseCase;
};

export const RequestListScreen: React.FC<Props> = ({
  useRequests,
  useAuththentication,
}) => {
  const [userLocation, setUserLocation] = useState<Geopoint | null>(null);

  const { data, error } = useSWR("requests", () => useRequests.get(), {
    refreshInterval: 5000,
  });

  // console.log(data);
  // console.log(error);

  async function signOutHandler() {
    await useAuththentication.signOut();
  }

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
        <p onClick={signOutHandler}>Sair</p>
      </NavbarContainer>
      {!data && !error ? (
        <p>Loading...</p>
      ) : data && userLocation ? (
        <RequestsContainer>
          {data.map((request, index) => (
            <RequestCard
              key={`request-${index}`}
              {...request}
              locationString={userLocation.latitude.toString()}
            />
          ))}
        </RequestsContainer>
      ) : (
        <p>Nenhuma request encontrada</p>
      )}
    </Container>
  );
};
