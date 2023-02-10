import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const Seo = ({ description, lang, meta, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
    >
      <script>
        {`
          (function () {
            const footerCopyYearEl = document.getElementById("footer-copy-year");
            footerCopyYearEl.textContent = new Date().getFullYear();
          })();
        `}
      </script>
    </Helmet>
  );
};

export default Seo;
