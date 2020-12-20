import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
  padding:0;
  margin:0;
}
html{
  padding:0;
  margin:0;
}
body {
    margin: 0;
    padding: 0;
    background: rgb(22, 82, 240) !important;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

`;
 
export default GlobalStyle;