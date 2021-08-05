import { CustomButton } from "core/components";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const TitleContainer = styled.div`
  color: white;
  text-align: center;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Button = styled(CustomButton)`
  margin-top: 40px;
  width: 200px;
  height: 40px;
  font-size: 18px;
  font-weight: 300;
  color: ${(props) => props.theme.colors.primary};
  background-color: white;
  transition: all 0.4s linear;
  -webkit-box-shadow: 6px 14px 16px -10px rgba(0, 0, 0, 0.41);
  -moz-box-shadow: 6px 14px 16px -10px rgba(0, 0, 0, 0.41);
  box-shadow: 6px 14px 16px -10px rgba(0, 0, 0, 0.41);

  &:hover {
    color: ${(props) => props.theme.colors.primary};
    background-color: white;
    transform: scale(1.05);
  }
`;

// export const Button = styled.button`
//   width: 200px;
//   height: 40px;
//   margin-top: 40px;
//   border-radius: 18px;
//   background-color: white;
//   border: solid 1px transparent;
//   color: ${(props) => props.theme.colors.primary};
//   font-size: 18px;
//   font-weight: 300;
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;

//   -webkit-box-shadow: 6px 14px 16px -10px rgba(0, 0, 0, 0.41);
//   -moz-box-shadow: 6px 14px 16px -10px rgba(0, 0, 0, 0.41);
//   box-shadow: 6px 14px 16px -10px rgba(0, 0, 0, 0.41);

//   &:hover {
//     transform: scale(1.02);
//     transition: all 0.1s ease-in-out;
//   }
// `;
