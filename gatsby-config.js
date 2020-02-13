/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config()

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/static/assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1080,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-firestore",
      options: {
        credential: require("./fir-gatsby-4a231-firebase-adminsdk-jb4jv-ed904a68a5.json"),
        types: [
          {
            type: "Movies",
            collection: "movies",
            map: doc => ({
              name: doc.name,
              id: doc.id,
            }),
          },
        ],
      },
    },
    `gatsby-plugin-layout`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify-cms`,
  ],
}
