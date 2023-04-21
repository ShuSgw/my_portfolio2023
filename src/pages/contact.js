import React from "react";
import "../styles/global.css";
import {graphql} from "gatsby";
import {useI18next, useTranslation} from "gatsby-plugin-react-i18next";

import Layout from "../components/global/layout/Layout";

const Contact = () => {
  const {languages, originalPath} = useI18next();
  console.log(originalPath);
  const {t} = useTranslation();

  const langInfo = {
    languages,
    originalPath,
  };

  return (
    <>
      <Layout langInfo={langInfo}>
        <div className="font-bold font-header text-4xl lg:text-4xl">
          Contact
        </div>
        <p className="pt-6 font-body leading-relaxed text-grey-20">
          {t("contactPage")}
        </p>
      </Layout>
    </>
  );
};

export const indexLang = graphql`
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

export default Contact;
