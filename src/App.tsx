import React from 'react';
import { createGlobalStyle } from "styled-components"

import Routes from './routes';


function App() {

  const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

    * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
}

body {
    font: 400 14px Roboto, sans-serif;
    background: #f0f0f5;
    -webkit-font-smoothing: antialiased;
}

button, input, textarea {
    font: 400 18px Roboto, sans-serif;
}
`

  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
