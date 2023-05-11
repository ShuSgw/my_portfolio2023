import React, {useEffect} from "react";
import {graphql} from "gatsby";
import {useI18next} from "gatsby-plugin-react-i18next";
import Layout from "../../components/global/layout/Layout";

import "@wordpress/block-library/build-style/style.css";
import "@wordpress/block-library/build-style/theme.css";

const Post = ({data}) => {
  const {languages, originalPath, language, i18n} = useI18next();

  const langInfo = {
    languages,
    originalPath,
  };

  return (
    <>
      <Layout langInfo={langInfo}>
        <div className="font-bold font-header text-4xl lg:text-4xl">
          {data.wpPost.title}
        </div>
        <div dangerouslySetInnerHTML={{__html: data.wpPost.content}} />
      </Layout>
    </>
  );
};

export const query = graphql`
  query ($id: String!, $language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    wpPost(id: {eq: $id}) {
      title
      content
    }
  }
`;

export default Post;
