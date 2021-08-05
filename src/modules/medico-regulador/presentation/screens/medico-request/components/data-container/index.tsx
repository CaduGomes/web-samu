import React from "react";
import { EscalaGlasglow } from "../escala-glasglow";

import { Container, Data } from "./styles";

type Props = {
  id: string;
  createAt: string;
  TARMDate: string;
};

export const DataContainer: React.FC<Props> = ({ createAt, id, TARMDate }) => {
  return (
    <Container>
      <Data>
        <label>Data do chamado</label>
        <p>{createAt}</p>
      </Data>
      <Data>
        <label>Finalizado pelo TARM</label>
        <p>{TARMDate}</p>
      </Data>
      <EscalaGlasglow />
    </Container>
  );
};
