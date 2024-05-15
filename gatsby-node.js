/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");
const DirectoryNamedWebpackPlugin = require("directory-named-webpack-plugin");

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
  const { createPage, deletePage } = actions;
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
};