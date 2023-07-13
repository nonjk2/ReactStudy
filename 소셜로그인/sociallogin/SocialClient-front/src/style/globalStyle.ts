import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    user-select: none;
  }
  body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
}


  *,
  *:before,
  *:after {
    box-sizing: border-box;
    position: relative;
  }

  body {
    
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #f1f2f6;
    color: #2f3542;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
