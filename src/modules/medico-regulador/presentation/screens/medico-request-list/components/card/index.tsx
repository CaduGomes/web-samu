import React from "react";

import { MedicoRequestEntity } from "../../../../../domain/entities";

import { Container } from "./styles";

type Props = {
  data: MedicoRequestEntity;
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
