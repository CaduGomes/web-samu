import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-areas: "Navbar" "Requests";
  grid-template-rows: 50px 1fr;
  grid-template-columns: 1fr;
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
  p {
    color: white;
    cursor: pointer;
  }
`;

export const RequestsContainer = styled.div`
  grid-area: Requests;
  margin-top: 50px;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;
