import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  width: 400px;
  padding: 20px;
  margin: 10px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
  -webkit-box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  color: black;
  transition: 0.2s ease-in-out;
  :hover {
    transform: scale(1.01);
  }
`;
