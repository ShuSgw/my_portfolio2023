// Gatsby がブラウザ向けバンドルに自動で読み込むのは .env.* のみ。
// Node 側のコード（gatsby-config.js / gatsby-node.js）では明示的に読み込む必要がある。
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
    //       path: null, // ブログ一覧ページのスラッグを指定する
    //       usePathPrefixForArticles: false, // デフォルトは true（例: パスが /blog/first-article になる）
    //     },
    //   },
    // },
    `gatsby-plugin-react-helmet`,
    // Google Analytics (GA4)。GA_MEASUREMENT_ID がセットされている時だけ有効化する
    // （.env.production / GitHub Actions secret を参照）。dev ビルドは計測対象外のままにする。
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
    // siteMetadata.siteUrl から /sitemap-index.xml（＋ /sitemap-0.xml）を生成する。
    // Google Search Console に登録済み。
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        // `excludes` はプラグインのデフォルト値を置き換えるため、デフォルトの 404 系エントリを
        // ここで再掲しつつ、i18n プレフィックス付きのもの（/ja/404 など）も併せて指定する。
        excludes: [
          `/dev-404-page`,
          `/404`,
          `/404.html`,
          `/offline-plugin-app-shell-fallback`,
          `/*/404`,
          `/*/404.html`,
        ],
      },
    },
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
