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

  const jpPostCount = await graphql(
    `
      {
        allWpCategory(filter: {slug: {eq: "japanese"}}) {
          nodes {
            count
          }
        }
      }
    `
  );

  const enPostCount = await graphql(
    `
      {
        allWpCategory(filter: {slug: {eq: "english"}}) {
          nodes {
            count
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  const PerPage = 2;
  const pageCount = Math.ceil(result.data.allWpPost.totalCount / PerPage);

  const pageCountJp = jpPostCount.data.allWpCategory.nodes[0].count;
  const pageCountEn = enPostCount.data.allWpCategory.nodes[0].count;

  for (let i = 0; i < pageCount; i++) {
    createPage({
      path: `/works/${i + 1}`,
      component: path.resolve("src/template/works-page.js"),
      context: {
        limit: PerPage,
        skip: i * PerPage,
        thePage: i + 1,
        pageCountJp: pageCountJp,
        pageCountEn: pageCountEn,
      },
    });
  }
};
