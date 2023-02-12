import * as React from "react";
import { Link } from "gatsby";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "../styles/GlobalStyles";
import { smartThemeDefault } from "../styles/smartThemeDefault";
import { smartThemeWv } from "../styles/smartThemeWv";
import smiLogo from "../images/logo-smi-burgundy.svg";
import wvLogo from "../images/logo/logo-wv.png";
import tnLogo from "../images/logo/logo-tn.png";
import { getCurrentYear } from "../utils/time";

const defaultTitle = "Down for Maintenance";

const Layout = ({ pageTitle, children, variant, appName, logo }) => {
  const themeVariant = variant === "wv" ? smartThemeWv : smartThemeDefault;
  const themeLogo = variant === "wv" ? wvLogo : tnLogo;

  return (
    <ThemeProvider theme={themeVariant}>
      <GlobalStyles />
      <div className="page-wrapper">
        <header className="page-header" id="page-header">
          <div className="branding" id="branding-block">
            <div className="logo-block logo-block-smart">
              <img src={logo || themeLogo} alt="" />
            </div>
          </div>
        </header>
        <main className="content-main">
          <div className="overlay"></div>
          <div className="message-block">
            <h1>
              <em className="kicker">Sorry, we&rsquo;re</em>
              {pageTitle || defaultTitle}
            </h1>
            <hr className="hairline mb-2 mt-2" />
            {children}
          </div>
        </main>
        <footer className="page-footer" id="page-footer">
          <div className="inner-footer">
            <p className="ts-s t-alignC">
              &copy;{" "}
              <span className="copy-year" id="footer-copy-year">
                {getCurrentYear()}
              </span>{" "}
              Systems &amp; Methods, Inc. All Rights Reserved
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
