const path = require(`path`);

exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions;

  const result = await graphql(
    `
      {
        allWpPost {
          totalCount
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  const PerPage = 2;
  const pageCount = Math.ceil(result.data.allWpPost.totalCount / PerPage);

  for (let i = 0; i < pageCount; i++) {
    createPage({
      path: `/works/${i + 1}`,
      component: path.resolve("src/template/blog-page.js"),
      context: {
        limit: PerPage,
        skip: i * PerPage,
      },
    });
  }
};
