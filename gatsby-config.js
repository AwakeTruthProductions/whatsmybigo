module.exports = {
  siteMetadata: {
    title: `Whats My Big O`,
    description: `A simple web application used to visualize code time complexity`,
    author: `@will.hayslett`,
    siteUrl: `https://whatsmybigo.com`,
  },
  plugins: [
    'gatsby-plugin-theme-ui',
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
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
}
