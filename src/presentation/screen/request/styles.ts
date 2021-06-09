import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-areas: "Navbar Navbar" "Data Images" "Chat Map";
  grid-template-rows: 50px 1fr 2fr;
  grid-template-columns: 1fr 1fr;
`;

export const NavbarContainer = styled.div`
  grid-area: Navbar;
  display: flex;
  padding: 0 40px;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;

  a {
    text-decoration: none;
    color: white;
  }
`;

export const DataArea = styled.div`
  grid-area: Data;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  margin-left: 20px;
`;

export const Title = styled.h2`
  padding: 10px 0;
`;

export const ImagesArea = styled.div`
  grid-area: Images;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;

export const ChatArea = styled.div`
  grid-area: Chat;
  width: 100%;
  height: 100%;
  margin-left: 20px;
`;

export const MapArea = styled.div`
  grid-area: Map;
  width: 100%;
  height: 100%;
  z-index: 999;
`;
