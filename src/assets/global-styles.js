import { injectGlobal } from 'styled-components'
import AvenirHeavy from './fonts/AvenirLTStd-Heavy.otf'
import AvenirRegular from './fonts/AvenirLTStd-Roman.otf'
import AvenirLight from './fonts/AvenirLTStd-Light.otf'
import icons from './icons.css'
import 'sanitize.css'

injectGlobal`
  @import url(${icons});

  @font-face {
    font-family: 'Avenir';
    font-style: normal;
    font-weight: 600;
    src: url(${AvenirHeavy}) format('opentype');
  }

  @font-face {
    font-family: 'Avenir';
    font-style: normal;
    font-weight: 400;
    src: url(${AvenirRegular}) format('opentype');
  }

  @font-face {
    font-family: 'Avenir';
    font-style: normal;
    font-weight: 300;
    src: url(${AvenirLight}) format('opentype');
  }

  :root {
    --primary-font: Avenir;
    --white: #ffffff;
    --cobalt: #0a385c;
  }

  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
  }

  body {
    font-family: var(--primary-font), Helvetica, Arial, sans-serif;
  }

  @media only screen
    and (min-device-width : 320px)
    and (max-device-width : 375px)
    and (orientation : portrait) {
      body {
        font-size: 12px;
      }
    }

  @media only screen
    and (min-device-width : 376px)
    and (max-device-width : 410px)
    and (orientation : portrait) {
      body {
        font-size: 14px;
      }
    }
`
