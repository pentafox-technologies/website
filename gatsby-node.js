/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");
const DirectoryNamedWebpackPlugin = require("directory-named-webpack-plugin");

const {portfolioProjectDetails} = require("./src/services/portfolioProjectDetails");

exports.onCreateWebpackConfig = ({
  stage,
  getConfig,
  rules,
  loaders,
  actions,
}) => {
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

  // Contentful Static Pages
  const result = await graphql(`
    query {
      allContentfulStaticPage {
        nodes {
          slug
        }
      }
    }
  `);

  result.data.allContentfulStaticPage.nodes.forEach(({ slug }) => {
    createPage({
      path: `/${slug}`,
      component: path.resolve("./src/templates/staticPage.js"),
      context: {
        slug,
      },
    });
  });

  // Portfolio Project Pages
  portfolioProjectDetails.forEach((project) => {
    createPage({
      path: `/portfolio/${project.id}`,
      component: path.resolve(
        "./src/components/projectPortfolio/PortfolioDetails.jsx"
      ),
      context: {
        projectId: project.id,
      },
    });
  });
};

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
