import { createGlobalStyle } from "styled-components";
import Rainer from "../assets/fonts/Rainer.otf";
const GlobalStyle = createGlobalStyle`
  @font-face {
        font-family: 'Rainer';
        src: local('Rainer'), local('Rainer');
        font-style: normal;
        src: url(${Rainer}) format('truetype');
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: #070707;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    color: #eee;
    font-size: 1vw;
    line-height: 1.6;
    letter-spacing: 0em;
    @media only screen and (min-width: 1560px){

      font-size: 0.975em;
    }


  }
  


  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
