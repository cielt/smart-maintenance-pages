const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);

const makePagesFromMdx = async ({ graphql, actions }) => {
  const stateMaintenancePageTemplate = path.resolve(
    `./src/templates/state-maintenance-page.js`
  );
  const { errors, data } = await graphql(`
    {
      allMdx {
        edges {
          node {
            id
            body
            fields {
              slug
            }
            frontmatter {
              title
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    }
  `);

  if (errors) {
    console.log(errors);
    throw new Error("An error occurred");
  }

  const states = data.allMdx.edges;
  states.forEach((state) => {
    actions.createPage({
      path: state.node.fields.slug,
      component: `${stateMaintenancePageTemplate}?__contentFilePath=${state.node.internal.contentFilePath}`,
      context: {
        slug: state.node.fields.slug,
        id: state.id,
      },
    });
  });
};

exports.createPages = async ({ graphql, actions }) => {
  await makePagesFromMdx({ graphql, actions });
};

// exports.createPages = async ({ graphql, actions, reporter }) => {
//   const { createPage } = actions;
//   const stateMaintenancePageTemplate = path.resolve(
//     `./src/templates/state-maintenance-page.js`
//   );
//   const result = await graphql(`
//     query {
//       allMdx {
//         nodes {
//           id
//           fields {
//             slug
//           }
//           frontmatter {
//             appName
//           }
//           internal {
//             contentFilePath
//           }
//         }
//       }
//     }
//   `);

//   if (result.errors) {
//     reporter.panicOnBuild("Error loading MDX result", result.errors);
//   }

//   // Create state maintenance pages
//   const statePages = result.data.allMdx.nodes;

//   statePages.forEach((node) => {
//     createPage({
//       path: node.fields.slug,
//       component: `${stateMaintenancePageTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
//       context: { id: node.id },
//     });
//   });
// };

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const generatedSlug = createFilePath({ node, getNode });
    createNodeField({
      node,
      name: `slug`,
      value: generatedSlug,
    });
  }
};
