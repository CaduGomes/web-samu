import React from "react";

import { Container } from "./styles";

type Props = {
  id: string;
  createAt: string;
  isOpen: boolean;
};

export const DataContainer: React.FC<Props> = ({ createAt, id, isOpen }) => {
  return (
    <Container>
      <p>Id: {id}</p>
      <p>Data: {createAt}</p>
      <p>Aberta: {isOpen ? "Sim" : "Não"}</p>
    </Container>
  );
};
