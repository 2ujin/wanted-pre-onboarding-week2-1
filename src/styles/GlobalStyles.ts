import { createGlobalStyle } from 'styled-components';
// import reset from 'styled-reset';
import { flexBox } from './mixin';

const GlobalStyles = createGlobalStyle` 

  body {
    ${flexBox('column', 'center', 'center')};
    overflow-x: hidden;
    margin: 0;
  }

  a{
      text-decoration: none;
      color: inherit;
  }
  *{
      box-sizing: border-box;
  }
  input, textarea { 
    -moz-user-select: auto;
    -webkit-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
  }
  input:focus {
    outline: none;
  }

  button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
  }
`;

export default GlobalStyles;