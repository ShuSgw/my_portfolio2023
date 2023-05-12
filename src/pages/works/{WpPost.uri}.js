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

  let allTheContents = {
    title: data.wpPost.title,
    content: data.wpPost.content,
  };

  if (
    language == "en" &&
    data.wpPost.english.englishTitle &&
    data.wpPost.english.englishContents
  ) {
    allTheContents.title = data.wpPost.english.englishTitle;
    allTheContents.content = data.wpPost.english.englishContents;
  }

  return (
    <>
      <Layout langInfo={langInfo}>
        <div className="font-bold font-header text-4xl lg:text-4xl">
          {allTheContents.title}
        </div>
        <div
          className="pt-7"
          dangerouslySetInnerHTML={{__html: allTheContents.content}}
        />
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
      english {
        englishContents
        englishTitle
        fieldGroupName
        englishExcerpt
      }
    }
  }
`;

export default Post;
