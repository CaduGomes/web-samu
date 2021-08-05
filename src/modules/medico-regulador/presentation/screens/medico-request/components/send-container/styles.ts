import styled from "styled-components";

export const Container = styled.div`
  grid-area: Send;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 10px;
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  padding: 10px 0;
  textarea {
    line-height: 20px;
    width: 100%;
    border-color: #ccc;
    height: 100%;
    padding: 15px 10px;
    resize: none;
  }
  label {
    height: 20px;
    position: absolute;
    top: 0px;
    left: 10px;
    font-weight: 600;
    padding: 0 5px;
    background-color: white;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;

  button {
    height: 100%;
    width: 48%;
  }
`;
