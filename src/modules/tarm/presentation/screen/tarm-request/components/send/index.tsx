import { CustomButton } from "core/components";
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
        <label>Anotações</label>
        <textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
      </InputContainer>
      <ButtonContainer>
        <CustomButton onClick={() => sendFunction(notes)}>
          Enviar para o regulador
        </CustomButton>
      </ButtonContainer>
    </Container>
  );
};
