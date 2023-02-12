import { createGlobalStyle } from "styled-components";

import WrenchTile from "../images/wrench-tile.svg";

const GlobalStyles = createGlobalStyle`

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
  background-color: ${({ theme }) => theme.brand.white};
  color: ${({ theme }) => theme.bodyTextColor};
  font-family: ${({ theme }) => theme.fontFamily.sans};
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.base};
}

/*
  Containers
-------------------------------------- */

.page-wrapper {
  position: relative;
  padding: ${({ theme }) => theme.spacing.space4};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  border-top: 3px solid ${({ theme }) => theme.brand.primary};
  background-color: ${({ theme }) => theme.bgPage};
}

.page-header {
  position: fixed;
  top: 0;
  margin-top: 3px;
  left: 0;
  background: transparent;
  z-index: 3;
  height: ${({ theme }) => theme.spacing.space5};
  width: 100%;
  padding: ${({ theme }) => theme.spacing.space1};
}

.page-header .branding {
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
}

.page-header .branding .logo-block {
  height: 80px;
  width: 120px;
}

.page-header .branding .logo-block img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.page-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  background: transparent;
  z-index: 3;
  height: ${({ theme }) => theme.spacing.space5};
  width: 100%;
  padding: ${({ theme }) => theme.spacing.space1};
}

.page-footer .inner-footer {
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  color: ${({ theme }) => theme.bodyTextColorSubtle};
}

.content-main {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 720px;
  border-top-left-radius: ${({ theme }) => theme.borderRad2};
  border-bottom-right-radius: ${({ theme }) => theme.borderRad2};
  background-color: ${({ theme }) => theme.brand.primary};
  padding-top: 9rem;
  box-shadow: ${({ theme }) => theme.boxShadow};
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
  border-top-left-radius: ${({ theme }) => theme.borderRad2};
  border-bottom-right-radius: ${({ theme }) => theme.borderRad2};
}

.content-main h1 {
  margin-bottom: 0;
}

.message-block {
  position: relative;
  z-index: 2;
  background-color: ${({ theme }) => theme.brand.white};
  padding: ${({ theme }) => theme.spacing.space5};
  border-bottom-right-radius: ${({ theme }) => theme.borderRad2};
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
  font-family: ${({ theme }) => theme.fontFamily.serif};
}

h1 {
  font-size: ${({ theme }) => theme.fontSize.h1};
  text-align: center;
}

.kicker {
  display: block;
  margin: 0 auto;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.brand.primary};
}

.appName {
  font-family: ${({ theme }) => theme.fontFamily.sans};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.base};
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
    padding: ${({ theme }) => theme.spacing.space2};
  }

  .page-header {
    height: 44px;
  }

  .page-header .branding .logo-block {
    height: 60px;
    width: 90px;
    margin: 0 auto;
  }

  .content-main {
    padding-top: 6rem;
  }

  .content-main .overlay {
    background-size: 80px;
  }

  .message-block {
    padding: ${({ theme }) => theme.spacing.space4} ${({ theme }) =>
  theme.spacing.space2};
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSize.h2};
  }

  .kicker {
    font-size: ${({ theme }) => theme.fontSize.base};
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
  border-bottom: 1px solid ${({ theme }) => theme.brand.primaryHighlight};
}

.mt-2 {
  margin-top: ${({ theme }) => theme.spacing.space2};
}

.mb-2 {
  margin-bottom: ${({ theme }) => theme.spacing.space2};
}

.mb-4 {
  margin-bottom: ${({ theme }) => theme.spacing.space4};
}

.t-alignC {
  text-align: center;
}

.tf-serif {
  font-family: ${({ theme }) => theme.fontFamily.serif};
}

.ts-s {
  font-size: ${({ theme }) => theme.fontSize.s};
}
`;

export default GlobalStyles;
