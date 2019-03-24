module.exports = {
  siteMetadata: {
    title: `Le Maquis`,
    description: `Collectif d'artistes lycéens du Mans.`,
    author: `@lemaquislemans`,
    siteUrl: `https://lemaquis.netlify.com`,
  },
  plugins: [
  `gatsby-plugin-sitemap`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-node-fields`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `artistes`,
        path: `${__dirname}/artistes`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `evenements`,
        path: `${__dirname}/evenements`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `site`,
        path: `${__dirname}/site`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Le Maquis`,
        short_name: `Le Maquis`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#d2ecdf`,
        icon: `src/images/logo.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-136585940-1",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
