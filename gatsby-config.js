/**
 * @type {import('gatsby').GatsbyConfig}
 */

const origin = "http://wv.smartchildsupport.com";

module.exports = {
  siteMetadata: {
    title: `Down for Maintenance`,
    description: `SMART is temporarily down for maintenance. We&rsquo;ll be back online soon!`,
    siteUrl: origin,
    appName: `SMART Child Support`,
  },
  plugins: [
    `gatsby-plugin-mdx`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `states`,
        path: `${__dirname}/src/states`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
};
