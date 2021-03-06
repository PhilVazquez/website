module.exports = {
  siteMetadata: {
    title: 'médialab website',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: '../data/assets'
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'medialab-website',
        short_name: 'medialab',
        start_url: '/'
      }
    },
    'gatsby-plugin-offline'
  ],
  mapping: {
    'ActivitiesJson.people': 'PeopleJson'
  }
};
