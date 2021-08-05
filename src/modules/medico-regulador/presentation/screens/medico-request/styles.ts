import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-areas: "Data Send Images" "Chat Chat Map";
  grid-template-rows: 1fr 1.2fr;
  grid-template-columns: 0.6fr 0.4fr 0.6fr;
`;

export const DataArea = styled.div`
  grid-area: Data;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding-left: 20px;
  padding-bottom: 10px;
`;

export const ImagesArea = styled.div`
  grid-area: Images;
  width: 100%;
  height: 100%;
  padding: 20px 10px 10px 0px;
`;

export const ChatArea = styled.div`
  grid-area: Chat;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;

export const MapArea = styled.div`
  grid-area: Map;
  width: 100%;
  height: 100%;
`;
