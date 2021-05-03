import { createGlobalStyle } from 'styled-components'

import Theme from './theme'

const GlobalStyle = createGlobalStyle`


  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/poppins-v9-latin-regular.woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    vertical-align: baseline;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

    html {
      font-size: 62.5%;
      scroll-behavior: smooth;
    }
    body {
      padding: 0;
      margin: 0;
      background-color: ${Theme.colors.mainBg};
      color: ${Theme.colors.white};
      font-size: ${Theme.font.sizes.small};
    }

`

export default GlobalStyle
