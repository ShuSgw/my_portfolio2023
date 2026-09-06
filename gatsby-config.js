// Gatsby only auto-loads .env.* into the browser bundle; Node-side code
// (gatsby-config.js / gatsby-node.js) has to load it explicitly.
require(`dotenv`).config({
  path: `.env.${process.env.NODE_ENV || `development`}`,
});

const gaMeasurementId = process.env.GA_MEASUREMENT_ID;

module.exports = {
  siteMetadata: {
    title: "sgw_studio",
    description: "Portfolio site showcasing web development projects and works",
    siteUrl: "https://shagawa.work",
    author: "sgw",
    image: "/og-image.png",
  },
  plugins: [
    // {
    //   resolve: "gatsby-theme-portfolio-minimal",
    //   options: {
    //     contentDirectory: null,
    //     blogSettings: {
    //       path: null, // Defines the slug for the blog listing page
    //       usePathPrefixForArticles: false, // Default true (i.e. path will be /blog/first-article)
    //     },
    //   },
    // },
    `gatsby-plugin-react-helmet`,
    // Google Analytics (GA4). Only enabled when GA_MEASUREMENT_ID is set
    // (see .env.production / GitHub Actions secret) so dev builds stay untracked.
    ...(gaMeasurementId
      ? [
          {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
              trackingIds: [gaMeasurementId],
              pluginConfig: {
                head: false,
                respectDNT: true,
              },
            },
          },
        ]
      : []),
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `https://api.shagawa.work/graphql`,
        useACF: true,
        auth: {},
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `companyLogo`,
        path: `${__dirname}/src/images/companyLogo`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: [`en`, `ja`],
        defaultLanguage: `en`,
      },
    },
    {
      resolve: "gatsby-plugin-htaccess",
      options: {},
      RewriteBase: "/public/",
      https: true,
      www: true,
      SymLinksIfOwnerMatch: true,
      host: "shagawa.work",
      ErrorDocument: `
          ErrorDocument 401 /error_pages/401.html
          ErrorDocument 404 /error_pages/404.html
          ErrorDocument 500 /error_pages/500.html
        `,
    },
  ],
};
