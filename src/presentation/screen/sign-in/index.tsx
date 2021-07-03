import React from "react";
import { AuthUseCase } from "domain/usecases";

import {
  Container,
  InputsContainer,
  SignInButton,
  SignInForm,
  TextInput,
} from "./styles";

type Props = {
  useAuthentication: AuthUseCase;
};

export const SignInScreen: React.FC<Props> = ({ useAuthentication }) => {
  async function signInHandle(e: React.SyntheticEvent) {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value;
    const password = target.password.value;

    try {
      await useAuthentication.signIn({
        email,
        password,
      });
    } catch (err) {
      // console.log(err);
    }
  }

  return (
    <Container>
      <SignInForm onSubmit={signInHandle}>
        <InputsContainer>
          <TextInput name="email" placeholder="Email" type="email" required />
          <TextInput
            name="password"
            placeholder="Senha"
            type="password"
            required
          />
        </InputsContainer>
        <SignInButton>Entrar</SignInButton>
      </SignInForm>
    </Container>
  );
};
