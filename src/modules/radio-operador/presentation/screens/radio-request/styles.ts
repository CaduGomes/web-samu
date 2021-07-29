import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100%;

  grid-template-areas: "Data Map";
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  button {
    position: absolute;
    bottom: 50px;
    width: 200px;
    height: 50px;
  }
`;

export const Data = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: column;
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 35px;
  p {
  }

  label {
    height: 20px;
    position: absolute;
    top: -13px;
    left: 10px;
    font-weight: 600;
    padding: 0 5px;
    background-color: white;
  }
`;
