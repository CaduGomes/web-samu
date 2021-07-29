import React from "react";
import { useState } from "react";

import { ButtonContainer, Container, InputContainer } from "./styles";

type Props = {
  sendRequest: (notes: string) => void;
  cancelRequest: () => void;
  initialNotes: string;
};

export const SendContainer: React.FC<Props> = ({
  sendRequest,
  initialNotes,
  cancelRequest,
}) => {
  const [notes, setNotes] = useState(initialNotes);
  return (
    <Container>
      <InputContainer>
        <textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
      </InputContainer>
      <ButtonContainer>
        <button onClick={cancelRequest}>Cancelar chamada</button>
        <button onClick={() => sendRequest(notes)}>Enviar para operador</button>
      </ButtonContainer>
    </Container>
  );
};
