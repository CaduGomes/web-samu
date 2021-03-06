import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas: "Chat FastAnswers" "Chat Send";
  grid-template-columns: 1.2fr 1fr;
  grid-template-rows: 1fr 0.8fr;
`;
