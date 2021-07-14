import React from "react";
import useSWR from "swr";

import { RequestUseCase } from "../../../domain/usecases/request-usecase";
import { Container, RequestsContainer } from "./styles";
import { Card } from "./components";

type Props = {
  useRequest: RequestUseCase;
};

export const TARMRequestListScreen: React.FC<Props> = ({ useRequest }) => {
  const { data, error } = useSWR("tarm-requests", () => useRequest.get(), {
    refreshInterval: 5000,
  });

  return (
    <Container>
      {!data && !error ? (
        <p>Loading...</p>
      ) : data ? (
        <RequestsContainer>
          {data.map((request, index) => (
            <Card key={`request-${index}`} data={request} />
          ))}
        </RequestsContainer>
      ) : (
        <p>Nenhuma request encontrada</p>
      )}
    </Container>
  );
};
