import React from "react";

import { RadioRequestEntity } from "../../../../../domain/entities";

import { Container } from "./styles";

type Props = {
  data: RadioRequestEntity;
};

export const Card: React.FC<Props> = ({ data }) => {
  return (
    <Container to={`/request/${data.id}`}>
      <p>Id: {data.id}</p>
      <p>Data: {data.createAt.toLocaleString()}</p>
    </Container>
  );
};
