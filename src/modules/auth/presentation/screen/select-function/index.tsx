import { useAuth } from "modules/auth/data/context/auth";
import React from "react";

import { Container, TitleContainer, Button } from "./styles";

export const SelectFunctionScreen: React.FC = () => {
  const { setRole } = useAuth();

  return (
    <Container>
      <TitleContainer>
        <h1>Urgência 192</h1>
        <p>Qual é a sua função?</p>
      </TitleContainer>

      <Button onClick={() => setRole("TARM")}>TARM</Button>
      <Button onClick={() => setRole("MEDICO_REGULADOR")}>
        Médico Regulador
      </Button>
      <Button onClick={() => setRole("RADIO_OPERADOR")}>Rádio Operador</Button>
    </Container>
  );
};
