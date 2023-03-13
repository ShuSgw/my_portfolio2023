import React from "react";
import {Link, useI18next, useTranslation} from "gatsby-plugin-react-i18next";
import {graphql} from "gatsby";

const PrivaPage = (props) => {
  const {languages, originalPath} = useI18next();
  const {t} = useTranslation();
  return (
    <div>
      <ul className="languages">
        {languages.map((lng) => (
          <li key={lng}>
            <Link to={originalPath} language={lng}>
              {lng}
            </Link>
          </li>
        ))}
      </ul>
      <div>{t("titleTxt")}</div>
    </div>
  );
};

export const topLang = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

export default PrivaPage;
