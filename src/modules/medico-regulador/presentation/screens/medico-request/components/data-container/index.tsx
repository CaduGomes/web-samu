import React from "react";

import { Container } from "./styles";

type Props = {
  id: string;
  createAt: string;
};

export const DataContainer: React.FC<Props> = ({ createAt, id }) => {
  return (
    <Container>
      <p>Id: {id}</p>
      <p>Data: {createAt}</p>
    </Container>
  );
};
