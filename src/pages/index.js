import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import DefaultMaintenanceMessage from "../components/DefaultMaintenanceMessage";
import smiLogo from "../images/logo-smi-burgundy.svg";

const IndexPage = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            appName
          }
        }
      }
    `
  );

  return (
    <Layout
      pageTitle={site.siteMetadata.title}
      variant="default"
      appName="SMART Child Support"
      logoPath={smiLogo}
    >
      <Seo
        title={`${site.siteMetadata.appName} | ${site.siteMetadata.title}`}
      ></Seo>
      <div className="mb-4">
        <DefaultMaintenanceMessage appName={site.siteMetadata.appName} />
      </div>
      <p className="t-alignC tf-serif">
        <strong>Stay tuned &mdash; we&rsquo;ll be back shortly!</strong>
      </p>
    </Layout>
  );
};

export default IndexPage;

export const Head = ({ location, params, data, pageContext }) => (
  <Seo>
    <title>SMART Child Support | Down for Maintenance</title>
  </Seo>
)
