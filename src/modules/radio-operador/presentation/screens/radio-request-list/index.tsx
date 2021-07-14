import React from "react";
import useSWR from "swr";
import { Container, RequestsContainer } from "./styles";
import { Card } from "./components";
import { RadioRequestUseCase } from "../../../domain/usecases";

type Props = {
  useRequest: RadioRequestUseCase;
};

export const RadioRequestListScreen: React.FC<Props> = ({ useRequest }) => {
  const { data, error } = useSWR("radio-requests", () => useRequest.get(), {
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
