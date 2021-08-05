import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  padding: 15px 10px;
  border: 1px solid #ccc;
  align-items: center;
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

export const ItensContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
`;

export const Image = styled.div`
  flex: 0 0 150px;
  padding-right: 10px;

  img {
    width: 100%;
    height: auto;
  }
`;

export const Video = styled.div`
  flex: 0 0 120px;
  padding-right: 10px;

  video {
    width: 100%;
    height: auto;
  }
`;

export const ModalContainer = styled.div`
  height: 100%;
  width: 100%;

  img {
    width: 100%;
    height: auto;
  }
`;
