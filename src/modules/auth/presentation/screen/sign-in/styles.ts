import { CustomButton } from "core/components";
import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SignInForm = styled.form`
  width: 400px;
  height: 400px;
  padding: 40px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputsContainer = styled.div`
  margin-top: 40px;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const TextInput = styled.input`
  margin-bottom: 20px;
  width: 250px;
  height: 40px;
  padding-left: 15px;
`;

export const Button = styled(CustomButton)`
  width: 200px;
  height: 50px;
  margin-top: 30px;
  font-size: 18px;
  font-weight: 300;
`;
