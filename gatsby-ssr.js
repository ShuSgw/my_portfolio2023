const React = require("react");

// Node-side code has to load .env.* explicitly (see gatsby-node.js).
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

const setInitialTheme = `
(function() {
  try {
    var stored = window.localStorage.getItem("theme");
    var theme = stored === "dark" || stored === "light"
      ? stored
      : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    if (theme === "dark") document.body.classList.add("dark");
  } catch (e) {}
})();
`;

exports.onRenderBody = ({setPreBodyComponents, setHeadComponents}) => {
  setPreBodyComponents([
    React.createElement("script", {
      key: "theme-init",
      dangerouslySetInnerHTML: {__html: setInitialTheme},
    }),
  ]);
  const headComponents = [
    React.createElement("link", {
      key: "favicon",
      rel: "icon",
      type: "image/png",
      href: "/favicon.png",
    }),
  ];

  // Google Search Console ownership verification (HTML meta tag method).
  // Value comes from Search Console; set GOOGLE_SITE_VERIFICATION in
  // .env.production / GitHub Actions secret.
  if (process.env.GOOGLE_SITE_VERIFICATION) {
    headComponents.push(
      React.createElement("meta", {
        key: "google-site-verification",
        name: "google-site-verification",
        content: process.env.GOOGLE_SITE_VERIFICATION,
      })
    );
  }

  setHeadComponents(headComponents);
};
