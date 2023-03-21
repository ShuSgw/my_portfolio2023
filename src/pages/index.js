import React from "react";
import "../styles/global.css";
import {graphql} from "gatsby";
import {useI18next, useTranslation} from "gatsby-plugin-react-i18next";

import Hero from "../components/frontSections/hero/Hero";
import Layout from "../components/global/layout/Layout";
import Skills from "../components/frontSections/skills/Skills";
import About from "../components/frontSections/about/About";

import Experience from "../components/frontSections/experience/Experience";

const IndexPage = () => {
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
        <Hero txtObj={t("titleTxt")} />
        <About />
        <Skills />
        <Experience />
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

export default IndexPage;
