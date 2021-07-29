import { MapView } from "core/components";
import { RadioRequestEntity } from "modules/radio-operador/domain/entities";
import { RadioRequestUseCase } from "modules/radio-operador/domain/usecases";
import React, { useState } from "react";
import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import { Container, DataContainer, Data } from "./styles";

type Params = {
  id: string;
};

type Props = {
  useRequest: RadioRequestUseCase;
};

export const RadioRequestScreen: React.FC<Props> = ({ useRequest }) => {
  const { id } = useParams<Params>();
  const [data, setData] = useState<RadioRequestEntity | null>(null);

  const history = useHistory();

  useEffect(() => {
    async function getData() {
      const res = await useRequest.getOne(id);

      if (res.id) {
        setData(res);
      }
    }

    getData();
  }, [id, useRequest]);

  async function sendRequest() {
    await useRequest.send({ id });
    history.push("/");
  }

  if (!data) {
    return null;
  }

  return (
    <Container>
      <DataContainer>
        <Data>
          <label>Identificador</label>
          <p>{data.id}</p>
        </Data>
        <Data>
          <label>Horário da chamada</label>
          <p>{data.createAt.toLocaleString()}</p>
        </Data>

        <Data>
          <label>Notas do médico</label>
          <p>{data.notes}</p>
        </Data>
        <button onClick={sendRequest}>Fechar chamada</button>
      </DataContainer>
      <MapView latitude={data.location.lat} longitude={data.location.lng} />
    </Container>
  );
};
