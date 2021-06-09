import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  width: 100%;
`;

export const Image = styled.div`
  flex: 0 0 150px;
  padding-right: 10px;

  img {
    width: 100%;
    height: 100%;
  }
`;
