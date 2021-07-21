
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }
  *::-webkit-scrollbar {
    width: 5px;
  }
  *::-webkit-scrollbar-track {
    background: transparent;
  }
  *::-webkit-scrollbar-thumb {
    background-color: rgba( 155, 155, 155, 0.5 );
    border-radius: 20px;
    border: transparent;
  }
  body {
    font-family: 'Lato', sans-serif;
  }
  h1,h2,h3 {
    color: #0f0f0f;
  }
  h3, h4 {
    font-weight: 400;
    color: rgb( 100, 100, 100 );
  }
  .selected {
    background-color: #3d3dad76;
  }
  .active-library {
    transform: translateX( 0% );
    opacity: 1;
  }
`

