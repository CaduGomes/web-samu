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

.Modal {
    position: absolute;
    width: 70%;
    height: 80%;
    border-radius: 8px;
    border: 1px solid black;
    overflow-y: auto;
    top: 40px;
    left: 40px;
    right: 40px;
    bottom: 40px;
    background-color: #f5f5f5;
  }

  .Overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .ImageModal {
    position: absolute;
    width: 450px;
    height: auto;
    border: 1px solid black;
    top: 40px;
    left: 40px;
    right: 40px;
    bottom: 40px;
    background-color: #f5f5f5;
  }

`;
