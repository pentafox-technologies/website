require("dotenv").config({
  path: `.env`
})


module.exports = {
  pathPrefix: "/website",
  siteMetadata: {
    title: `pentafoxWeb`,
    siteUrl: `https://pentafox.in/`,
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.GATSBY_SPACE_ID,
        accessToken: process.env.GATSBY_ACCESS_TOKEN,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
    "gatsby-plugin-smoothscroll",
    "gatsby-transformer-remark",
    "gatsby-plugin-mantine",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pentafox`,
        short_name: `pentafox`,
        start_url: `/`,
        background_color: `#dc2908`,
        theme_color: `#dc2908`,
        display: `minimal-ui`,
        icon: `src/images/logo-icon.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/
        }
      }
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat: 300,400,500,600,700`,
          `Outfit: 300,400,500,600,700`,
          `Varela Round: 400`,
        ],
        display: "swap",
      },
    },
    {
      resolve: 'gatsby-plugin-force-file-loader'
    }
  ],
};
