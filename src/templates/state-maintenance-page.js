import React from "react";
import { graphql, Link } from "gatsby";
import { MDXProvider } from "@mdx-js/react";

import Seo from "../components/Seo";
import Layout from "../components/Layout";
import DefaultMaintenanceMessage from "../components/DefaultMaintenanceMessage";

const shortcodes = { Link }; // common components

export const stateQuery = graphql`
  query StateMaintenancePage($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        stateName
        appName
        theme
      }
      body
    }
  }
`;

const StateMaintenancePage = ({ data: { mdx: state }, children }) => {
  if (!state) {
    return <p>No State found? This should be a 404</p>;
  }

  const {
    frontmatter: { title, date, stateName, appName, theme },
  } = state;

  return (
    <Layout pageTitle={title} variant={theme}>
      <Seo title={`${appName} | Down for Maintenance`}></Seo>
      <MDXProvider components={shortcodes}>
        {children}
        <div className="mb-4">
          <DefaultMaintenanceMessage appName={appName} />
        </div>
        <p className="t-alignC tf-serif">
          <strong>Stay tuned &mdash; we&rsquo;ll be back shortly!</strong>
        </p>
      </MDXProvider>
    </Layout>
  );
};

export default StateMaintenancePage;
