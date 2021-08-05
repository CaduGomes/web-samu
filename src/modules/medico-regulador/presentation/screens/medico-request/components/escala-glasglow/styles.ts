import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  width: 100%;
  padding: 10px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 10px;

  p {
    width: 50%;
  }
`;

export const RadiosContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;

  input {
    margin-right: 10px;
  }
`;

export const CloseContainer = styled.div`
  margin-top: 3%;
  display: flex;
  flex-direction: column;
  width: 30%;
  align-items: center;

  button {
    margin-top: 10px;
    width: 100%;
  }
`;

export const OpenButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  position: relative;
  border: 1px solid #ccc;
  padding: 15px;

  label {
    height: 20px;
    position: absolute;
    top: -13px;
    left: 10px;
    font-weight: 600;
    padding: 0 5px;
    background-color: white;
  }

  p {
    text-align: center;
    width: 50%;
  }

  span {
    font-weight: bold;
  }
`;
