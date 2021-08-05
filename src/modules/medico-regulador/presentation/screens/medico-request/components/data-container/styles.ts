import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: space-around;
`;

export const Data = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  border: 1px solid #ccc;
  padding: 10px;
  position: relative;
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
