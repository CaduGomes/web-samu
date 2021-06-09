import { AmbulanceRequestModel } from "domain/models";
import React from "react";
import { useHistory } from "react-router";

import { Container } from "./styles";

interface Props extends AmbulanceRequestModel {
  locationString: string;
}

export const RequestCard: React.FC<Props> = (params) => {
  const { isOpen, id, createAt, locationString } = params;
  const histoy = useHistory();

  function openRequestScreenHandler() {
    histoy.push(`/request-list/${id}`);
  }

  return (
    <Container onClick={openRequestScreenHandler}>
      <p>Id: {id}</p>
      <p>Data: {createAt.toDate().toLocaleString()}</p>
      <p>Aberta: {isOpen ? "Sim" : "Não"}</p>
      <p>Localização: {locationString}</p>
    </Container>
  );
};
