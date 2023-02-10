import { createGlobalStyle } from "styled-components";

import WrenchTile from "../images/wrench-tile.svg";

const GlobalStyles = createGlobalStyle`
:root {
  --white: #fff;
  --light-grey0: #f1f4f5;
  --light-grey1: #898989;
  --dark-grey0: #3f3f4a;
  --text-header: --dark-grey0;
  --text-secondary: --light-grey1;
  --smi-burgundy: #922e48;
  --smi-burgundy-translucent: rgba(146, 46, 72, 0.84);
  --smi-burgundy-light0: #e76c8d;
  --dark-blue0: #0c2d4d;
  --light-blue0: #3b91df;
  --sage: #84a188;
  --header-font-family: Georgia, serif;
  --default-sans-family: sans-serif;
  --b-space1: 1rem;
  --b-space2: 2rem;
  --b-space3: 3rem;
  --b-space4: 4rem;
  --b-space5: 5rem;
  --b-space6: 6rem;
  --b-borderRad1: 15px;
  --b-borderRad2: 30px;
  --font-size-h1: 4.8rem;
  --font-size-h2: 3.6rem;
  --font-size-base: 1.8rem;
  --font-size-l: 2.8rem;
  --font-size-s: 1.5rem;
  --max-width: 1200px;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  padding: 0;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--white);
  color: var(--dark-grey0);
  font-family: var(--default-sans-family);
  font-weight: 400;
  font-size: var(--font-size-base);
}

/*
  Containers
-------------------------------------- */

.page-wrapper {
  position: relative;
  padding: var(--b-space4);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  border-top: 3px solid var(--smi-burgundy);
  background-color: var(--light-grey0);
}

.page-header {
  position: fixed;
  top: 0;
  margin-top: 3px;
  left: 0;
  background: transparent;
  z-index: 3;
  height: var(--b-space5);
  width: 100%;
  padding: var(--b-space1);
}

.page-header .branding {
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
}

.page-header .branding .logo-block {
  height: 30px;
  width: 60px;
}

.page-header .branding .logo-block img {
  width: auto;
  height: 100%;
}

.page-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  background: transparent;
  z-index: 3;
  height: var(--b-space5);
  width: 100%;
  padding: var(--b-space1);
}

.page-footer .inner-footer {
  max-width: var(--max-width);
  margin: 0 auto;
  color: var(--light-grey1);
}

.content-main {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 720px;
  border-top-left-radius: var(--b-borderRad2);
  border-bottom-right-radius: var(--b-borderRad2);
  background-color: var(--smi-burgundy);
  padding-top: 9rem;
  box-shadow: 0 1px 8px 1px rgba(136, 136, 136, 0.48);
}

.content-main .overlay {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: url(${WrenchTile}) transparent repeat center left;
  background-size: 120px;
  opacity: 0.24;
  border-top-left-radius: var(--b-borderRad2);
  border-bottom-right-radius: var(--b-borderRad2);
}

.content-main h1 {
  margin-bottom: 0;
}

.message-block {
  position: relative;
  z-index: 2;
  background-color: var(--white);
  padding: var(--b-space5);
  border-bottom-right-radius: var(--b-borderRad2);
}

/*
  Typography
-------------------------------------- */

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0 0 0.5em;
  line-height: 1.25;
  font-family: var(--header-font-family);
}

h1 {
  font-size: var(--font-size-h1);
  text-align: center;
}

.kicker {
  display: block;
  margin: 0 auto;
  font-size: var(--font-size-l);
  color: var(--smi-burgundy);
}

p {
  line-height: 1.5;
  margin: 0 auto 1em;
}

p:last-child, p:only-child {
  margin-bottom: 0;
}

@media (max-width: 480px) {
  .page-wrapper {
    padding: var(--b-space2);
  }

  .page-header {
    height: 44px;
  }

  .page-header .branding .logo-block {
    height: 24px;
    width: 48px;
    margin: 0 auto;
  }

  .content-main {
    padding-top: 6rem;
  }

  .content-main .overlay {
    background-size: 80px;
  }

  .message-block {
    padding: var(--b-space4) var(--b-space2);
  }

  h1 {
    font-size: var(--font-size-h2);
  }

  .kicker {
    display: block;
    margin: 0 auto;
    font-size: var(--font-size-base);
    color: var(--smi-burgundy);
  }
}

/*
  Misc Elements, utils
-------------------------------------- */

.hairline {
  display: block;
  border: 0;
  height: 0;
  width: 100%;
  border-bottom: 1px solid var(--smi-burgundy-light0);
}

.mt-2 {
  margin-top: var(--b-space2);
}

.mb-2 {
  margin-bottom: var(--b-space2);
}

.mb-4 {
  margin-bottom: var(--b-space4);
}

.t-alignC {
  text-align: center;
}

.ts-s {
  font-size: var(--font-size-s);
}
`;

export default GlobalStyles;
