import React from "react";
import "../styles/global.css";
import {Link, graphql} from "gatsby";
import {useI18next, useTranslation} from "gatsby-plugin-react-i18next";
import {GatsbyImage} from "gatsby-plugin-image";

import Layout from "../components/global/layout/Layout";
import Cards from "../components/works/cards/Cards";
import Pagination from "../components/works/pagination/pagination";

const Works = ({data, pageContext}) => {
  const {languages, originalPath, language} = useI18next();
  console.log(originalPath);
  const {t} = useTranslation();

  const langInfo = {
    languages,
    originalPath,
  };

  const makeTheLangPagenation = (theCurrentLang) => {
    let totalCountOfTheLang = pageContext.pageCountEn;

    if (theCurrentLang == "ja") {
      totalCountOfTheLang = pageContext.pageCountJp;
    }

    return (
      <Pagination
        totalCount={totalCountOfTheLang}
        thePage={pageContext.thePage}
      />
    );
  };

  console.log(language, "aaa");
  return (
    <>
      <Layout langInfo={langInfo}>
        <div className="font-bold font-header text-4xl lg:text-4xl">Works</div>
        <Cards list={data.allWpPost.edges} theCurrentLang={language} />
        {makeTheLangPagenation(language)}
        {/* <Pagination
          totalCount={data.allWpPost.totalCount}
          thePage={pageContext.thePage}
        /> */}
        {/* <Pagination
          totalCount={pageContext.pageCountJp}
          thePage={pageContext.thePage}
        /> */}
      </Layout>
    </>
  );
};

export const indexLang = graphql`
  query ($limit: Int!, $skip: Int!, $language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    allWpPost(limit: $limit, skip: $skip) {
      edges {
        node {
          id
          title
          excerpt
          uri
          categories {
            nodes {
              slug
              name
            }
          }
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    quality: 100
                    placeholder: BLURRED
                    layout: CONSTRAINED
                    transformOptions: {cropFocus: CENTER}
                    width: 500
                    height: 280
                  )
                }
              }
            }
          }
        }
      }
      totalCount
    }
  }
`;

export default Works;
