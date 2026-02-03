/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");
const DirectoryNamedWebpackPlugin = require("directory-named-webpack-plugin");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
      plugins: [
        new DirectoryNamedWebpackPlugin({
          exclude: /node_modules/,
        }),
      ],
    },
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  /* ===============================
     STATIC PAGES (Contentful)
  =============================== */

  const staticPagesResult = await graphql(`
    query {
      allContentfulStaticPage {
        nodes {
          slug
        }
      }
    }
  `);

  staticPagesResult.data.allContentfulStaticPage.nodes.forEach(({ slug }) => {
    createPage({
      path: `/${slug}`,
      component: path.resolve("./src/templates/staticPage.js"),
      context: {
        slug,
      },
    });
  });

  /* ===============================
     PORTFOLIO DETAIL PAGES (Contentful)
  =============================== */

  const portfolioResult = await graphql(`
    query {
      allContentfulPortfolio {
        nodes {
          contentful_id
          slug
        }
      }

      allContentfulAviationPortfolio {
        nodes {
          contentful_id
          slug
        }
      }
    }
  `);

  portfolioResult.data.allContentfulPortfolio.nodes.forEach((project) => {
    createPage({
      path: `/portfolio/${project.slug}`,
      component: path.resolve(
        "./src/components/projectPortfolio/PortfolioDetails.jsx"
      ),
      context: {
        contentfulId: project.contentful_id,
      },
    });
  });

  portfolioResult.data.allContentfulAviationPortfolio.nodes.forEach(
    (project) => {
      createPage({
        path: `/portfolio/${project.slug}`,
        component: path.resolve(
          "./src/components/projectPortfolio/PortfolioDetails.jsx"
        ),
        context: {
          contentfulId: project.contentful_id,
        },
      });
    }
  );
};

// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

// const path = require("path");
// const DirectoryNamedWebpackPlugin = require("directory-named-webpack-plugin");

// const {portfolioProjectDetails} = require("./src/services/portfolioProjectDetails");

// exports.onCreateWebpackConfig = ({
//   stage,
//   getConfig,
//   rules,
//   loaders,
//   actions,
// }) => {
//   actions.setWebpackConfig({
//     resolve: {
//       modules: [path.resolve(__dirname, "src"), "node_modules"],
//       plugins: [
//         new DirectoryNamedWebpackPlugin({
//           exclude: /node_modules/,
//         }),
//       ],
//     },
//   });
// };

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;

//   // Contentful Static Pages
//   const result = await graphql(`
//     query {
//       allContentfulStaticPage {
//         nodes {
//           slug
//         }
//       }
//     }
//   `);

//   result.data.allContentfulStaticPage.nodes.forEach(({ slug }) => {
//     createPage({
//       path: `/${slug}`,
//       component: path.resolve("./src/templates/staticPage.js"),
//       context: {
//         slug,
//       },
//     });
//   });

//   // Portfolio Project Pages
//   portfolioProjectDetails.forEach((project) => {
//     createPage({
//       path: `/portfolio/${project.id}`,
//       component: path.resolve(
//         "./src/components/projectPortfolio/PortfolioDetails.jsx"
//       ),
//       context: {
//         projectId: project.id,
//       },
//     });
//   });
// };

// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

// const path = require("path");
// const DirectoryNamedWebpackPlugin = require("directory-named-webpack-plugin");

// exports.onCreateWebpackConfig = ({
//   stage,
//   getConfig,
//   rules,
//   loaders,
//   actions,
// }) => {
//   actions.setWebpackConfig({
//     resolve: {
//       modules: [path.resolve(__dirname, "src"), "node_modules"],
//       plugins: [
//         new DirectoryNamedWebpackPlugin({
//           exclude: /node_modules/,
//         }),
//       ],
//     },
//   });
// };

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage, deletePage } = actions;
//   const result = await graphql(`
//     query {
//       allContentfulStaticPage {
//         nodes {
//           slug
//         }
//       }
//     }
//   `);
//   result.data.allContentfulStaticPage.nodes.forEach(({ slug }) => {
//     createPage({
//       path: `/${slug}`,
//       component: path.resolve("./src/templates/staticPage.js"),
//       context: {
//         slug,
//       },
//     });
//   });
// };
