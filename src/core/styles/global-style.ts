import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html, body {
    letter-spacing: 1px;
    font-family: Poppins, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

#root {
  height: 100vh;
}

#container {
  height: 93%;
  width: 100%;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;
