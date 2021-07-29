import React, { useState } from "react";

import { Container, InputContainer, ButtonContainer } from "./styles";

type Props = {
  sendFunction: (notes: string) => void;
};

export const Send: React.FC<Props> = ({ sendFunction }) => {
  const [notes, setNotes] = useState("");
  return (
    <Container>
      <InputContainer>
        <textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
      </InputContainer>
      <ButtonContainer>
        <button onClick={() => sendFunction(notes)}>
          Enviar para o regulador
        </button>
      </ButtonContainer>
    </Container>
  );
};
