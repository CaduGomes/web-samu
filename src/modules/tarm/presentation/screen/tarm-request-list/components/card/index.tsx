import React from "react";

import { RequestEntity } from "../../../../../domain/entities/request-entity";

import { Container } from "./styles";

type Props = {
  data: RequestEntity;
};

export const Card: React.FC<Props> = ({ data }) => {
  return (
    <Container to={`/request/${data.id}`}>
      <p>Id: {data.id}</p>
      <p>Data: {data.createAt.toLocaleString()}</p>
      <p>Aberta: {data.isOpen ? "Sim" : "Não"}</p>
    </Container>
  );
};
