import React from "react";
import "../styles/global.css";
import Timeline from "../components/timeline/Timeline";
import {graphql} from "gatsby";
import {useI18next, useTranslation} from "gatsby-plugin-react-i18next";
import {Animation, HeroSection} from "gatsby-theme-portfolio-minimal";

import Hero from "../components/hero/Hero";
import Layout from "../components/global/layout/Layout";
import Skills from "../components/skills/Skills";

const IndexPage = () => {
  const {languages, originalPath} = useI18next();
  console.log(originalPath);
  const {t} = useTranslation();

  const langInfo = {
    languages,
    originalPath,
  };

  return (
    <Layout langInfo={langInfo}>
      {/* <div className="text-black dark:text-white">{t("titleTxt")}</div> */}
      <Hero txtObj={t("titleTxt")} />
      <Skills />
    </Layout>
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

export default IndexPage;
