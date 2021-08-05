import styled from "styled-components";

export const CustomButton = styled.button`
  width: auto;
  padding: 0 10px;
  height: 40px;
  border-radius: 18px;
  background-color: ${(props) => props.theme.colors.primary};
  border: solid 1px transparent;
  color: #fff;
  font-size: 14px;
  font-weight: 300;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: transparent;
    border-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.primary};
    transition: all 0.1s ease-in-out;
  }
`;
