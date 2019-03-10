module.exports = {
  siteMetadata: {
    title: `Le Maquis`,
    description: `Collectif d'artistes lycéens du Mans.`,
    author: `@lemaquislemans`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-node-fields`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
