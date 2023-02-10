import * as React from "react";

import Layout from "../components/Layout";

const IndexPage = () => {
  return (
    <Layout pageTitle="Down for Maintenance">
      <p>
        <span className="appName">SMART Application</span> is currently
        unavailable while we perform site maintenance. We&rsquo;re working hard
        to bring you an even better experience at{" "}
        <span className="appName">SMART Application</span>!
      </p>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <title>Sorry, We&rsquo;re Down for Maintenance | Be Back Soon | SMART</title>
);
