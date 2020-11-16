module.exports = {
  siteMetadata: {
    title: `Tristan Biehn`,
    description: `I’m a Montreal-based designer who draws from a background in Anthropology and ethnographic research to bring critical insights, incisive analysis, and a well-honed sense of empathy to the field of user experience. I’m into food and travel and I’ll drive any number of hours for really good beer.`,
    author: `Michael Pinder`,
  },
  plugins: [
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/stamp.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
