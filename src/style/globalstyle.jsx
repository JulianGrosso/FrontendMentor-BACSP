import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
	box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  html, body {
    margin: 0;
    padding: 0;

    width: 100vw;
    height: 100vh;
    min-height: 100%;
    min-height: -webkit-fill-available;

    overflow: hidden;

    font-family: 'Josefin Sans', sans-serif;
    
    color: #fff;
    background-color: #fff;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
