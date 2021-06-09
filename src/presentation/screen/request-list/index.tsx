import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { AmbulanceRequest, Authentication } from "domain/usecases";
import { getDistanceFromLatLonInKm, Geopoint } from "presentation/utils";
import { RequestCard } from "./components";

import { Container, RequestsContainer, NavbarContainer } from "./styles";

type Props = {
  useRequests: AmbulanceRequest;
  useAuththentication: Authentication;
};

export const RequestListScreen: React.FC<Props> = ({
  useRequests,
  useAuththentication,
}) => {
  // const [loading, setLoading] = useState(true);
  // const [data, setData] = useState<AmbulanceRequest.Model[] | null>(null);
  const [userLocation, setUserLocation] = useState<Geopoint>({
    latitude: 0,
    longitude: 0,
  });

  const { data, error } = useSWR("requests", () => useRequests.get(), {
    refreshInterval: 5000,
  });

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

  // useEffect(() => {
  //   async function getData() {
  //     const data = await useRequests.get();
  //     setData(data);
  //     setLoading(false);
  //   }
  //   getData();
  // }, [useRequests]);

  return (
    <Container>
      <NavbarContainer>
        <p onClick={signOutHandler}>Sair</p>
      </NavbarContainer>
      {!data && !error ? (
        <p>Loading...</p>
      ) : data ? (
        <RequestsContainer>
          {data.map((request, index) => (
            <RequestCard
              key={`request-${index}`}
              {...request}
              locationString={getDistanceFromLatLonInKm(
                userLocation,
                request.location
              )}
            />
          ))}
        </RequestsContainer>
      ) : (
        <p>Nenhuma request encontrada</p>
      )}
    </Container>
  );
};
