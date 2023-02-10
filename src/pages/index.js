import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../components/Seo";

const IndexPage = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            applicationName
          }
        }
      }
    `
  );

  return (
    <Layout pageTitle="Down for Maintenance">
      <Seo title="SMART Child Support | Down for Maintenance"></Seo>
      <p>
        <span className="appName">{site.siteMetadata.applicationName}</span> is
        currently unavailable while we perform site maintenance. We&rsquo;re
        working hard to bring you an even better experience at{" "}
        <span className="appName">{site.siteMetadata.applicationName}</span>!
      </p>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <title>Sorry, We&rsquo;re Down for Maintenance | Be Back Soon | SMART</title>
);
