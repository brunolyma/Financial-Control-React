import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  :root {
    font-size: 62.5%; // 1rem = 10px
  }

  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Poppins', sans-serif;
    background-color: #f2f2f2;
  }
`;
export default GlobalStyle;
