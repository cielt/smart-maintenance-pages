import * as React from "react";
import { Link } from "gatsby";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "../styles/GlobalStyles";
import { smartThemeDefault } from "../styles/smartThemeDefault";
import smiLogo from "../images/logo-smi-burgundy.svg";

const Layout = ({ pageTitle, children }) => {
  return (
    <ThemeProvider theme={smartThemeDefault}>
      <GlobalStyles />
      <div className="page-wrapper">
        <header class="page-header" id="page-header">
          <div className="branding" id="branding-block">
            <div className="logo-block logo-block-smart">
              <span className="logo-block">
                <img src={smiLogo} alt="" />
              </span>
            </div>
          </div>
        </header>
        <main className="content-main">
          <div className="overlay"></div>
          <div className="message-block">
            <h1>
              <em className="kicker">Sorry, we&rsquo;re</em>
              {pageTitle}
            </h1>
            <hr className="hairline mb-2 mt-2" />
            <p>{children}</p>
            <p className="t-alignC">
              <strong>Stay tuned &mdash; we&rsquo;ll be back shortly!</strong>
            </p>
          </div>
        </main>
        <footer className="page-footer" id="page-footer">
          <div className="inner-footer">
            <p className="ts-s t-alignC">
              &copy; <span className="copy-year" id="footer-copy-year"></span>{" "}
              Systems &amp; Methods, Inc. All Rights Reserved
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
