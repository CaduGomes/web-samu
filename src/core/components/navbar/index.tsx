import { AuthUseCase } from "modules/auth/domain/usecases";
import React from "react";

import { Container } from "./styles";

type Props = {
  useAuththentication: AuthUseCase;
};

export const Navbar: React.FC<Props> = ({ useAuththentication }) => {
  async function signOutHandler() {
    await useAuththentication.signOut();
  }

  return (
    <Container>
      <p onClick={signOutHandler}>Sair</p>
    </Container>
  );
};
