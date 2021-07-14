import { RadioRequestUseCase } from "modules/radio-operador/domain/usecases";
import React from "react";
import { useParams } from "react-router-dom";

import {} from "./styles";

type Params = {
  id: string;
};

type Props = {
  useRequest: RadioRequestUseCase;
};

export const RadioRequestScreen: React.FC<Props> = ({ useRequest }) => {
  const { id } = useParams<Params>();

  async function sendRequest() {
    await useRequest.send({ id });
  }

  return (
    <div>
      <p>Teste</p>
      <button onClick={sendRequest}>Close</button>
    </div>
  );
};
