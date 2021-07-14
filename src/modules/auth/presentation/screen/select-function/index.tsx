import { useAuth } from "modules/auth/data/context/auth";
import React from "react";

import { Container } from "./styles";

export const SelectFunctionScreen: React.FC = () => {
  const { setRole } = useAuth();

  return (
    <Container>
      <button onClick={() => setRole("TARM")}>TARM</button>
      <button onClick={() => setRole("MEDICO_REGULADOR")}>
        Médico Regulador
      </button>
      <button onClick={() => setRole("RADIO_OPERADOR")}>Rádio Operador</button>
    </Container>
  );
};
