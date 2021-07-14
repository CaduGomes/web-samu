import styled from "styled-components";

export const Container = styled.div`
  grid-area: Navbar;
  display: flex;
  padding: 0 40px;
  width: 100%;
  height: 7%;
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
