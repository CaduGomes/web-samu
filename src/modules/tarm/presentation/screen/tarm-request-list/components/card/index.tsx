import React from "react";

import { TARMRequestEntity } from "../../../../../domain/entities";

import { Container } from "./styles";

type Props = {
  data: TARMRequestEntity;
};

export const Card: React.FC<Props> = ({ data }) => {
  return (
    <Container to={`/request/${data.id}`}>
      <p>Id: {data.id}</p>
      <p>Data: {data.createAt.toLocaleString()}</p>
    </Container>
  );
};
