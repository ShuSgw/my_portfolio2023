import React from "react";
import "../styles/global.css";
import Timeline from "../components/timeline/Timeline";
import {graphql} from "gatsby";

import Layout from "../components/global/layout/Layout";
const IndexPage = () => {
  return (
    <Layout>
      <div>contact</div>
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
