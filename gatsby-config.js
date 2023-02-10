/**
 * @type {import('gatsby').GatsbyConfig}
 */

const origin = "http://wv.smartchildsupport.com";

module.exports = {
  siteMetadata: {
    title: `SMART | Down for Maintenance`,
    description: `SMART is temporarily down for maintenance. We&rsquo;ll be back online soon!`,
    siteUrl: origin,
    applicationName: `SMART Test Application`,
  },
  plugins: [`gatsby-plugin-react-helmet`, `gatsby-plugin-styled-components`],
};
