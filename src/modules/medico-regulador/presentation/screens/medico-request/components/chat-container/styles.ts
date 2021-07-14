import styled from "styled-components";

import { MessageDirectionEntity } from "core/domain/entities";

export const Container = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  padding: 0 10px 10px 20px;
  grid-template-areas: "Messages" "Input";
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 50px;
`;

export const MessagesContainer = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 20px;
`;

export const Chat = styled.div`
  grid-area: Messages;
  overflow-y: scroll;
  position: relative;
  scroll-behavior: smooth;
  scroll-margin-bottom: 0;
  scroll-padding-bottom: 0;
  background-color: #f5f5f5;
`;

type MessageProps = {
  index: number;
  direction: MessageDirectionEntity;
};

export const Message = styled.div<MessageProps>`
  position: absolute;
  padding: 5px;
  border: 1px solid black;
  color: white;
  border-radius: 6px;
  left: ${(props) => (props.direction === "client" ? "30px" : "")};
  right: ${(props) => (props.direction === "admin" ? "30px" : "")};
  background-color: ${(props) =>
    props.direction === "admin" ? "#056162" : "#262D31"};
  bottom: calc(50px * ${(props) => props.index});
`;

export const Input = styled.input`
  height: 100%;
  width: 80%;
  padding-left: 10px;
`;

export const InputContainer = styled.div`
  grid-area: Input;
  width: 100%;

  button {
    height: 100%;
    width: 20%;
  }
`;
