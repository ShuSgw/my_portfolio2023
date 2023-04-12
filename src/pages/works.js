import React from "react";
import "../styles/global.css";
import {Link, graphql} from "gatsby";
import {useI18next, useTranslation} from "gatsby-plugin-react-i18next";
import {GatsbyImage} from "gatsby-plugin-image";

import Layout from "../components/global/layout/Layout";

import Pagination from "../components/works/pagination/pagination";

const Works = ({data}) => {
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
        <div className="font-bold font-header text-4xl lg:text-4xl">Works</div>
        <p className="pt-6 font-body leading-relaxed text-grey-20">
          {t("worksPage")}
        </p>

        {data.allWpPost.edges.map(({node}) => (
          <div key={node.id} className="p-Home-block">
            {node.featuredImage ? (
              <GatsbyImage
                image={
                  node.featuredImage.node.localFile.childImageSharp
                    .gatsbyImageData
                }
                alt={
                  node.featuredImage.node.altText
                    ? node.featuredImage.node.altText
                    : ""
                }
                as={`figure`}
                style={{aspectRatio: "25/14"}}
              />
            ) : (
              <div>No Image </div>
            )}
            <h2 className="p-Home-heading">{node.title}</h2>
            <div
              className="p-Home-desc"
              dangerouslySetInnerHTML={{__html: node.excerpt}}
            />
            <Link to={`/works${node.uri}`}>
              <p className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                詳細チェック
              </p>
            </Link>
          </div>
        ))}

        <Pagination totalCount={data.allWpPost.totalCount} />
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
    allWpPost(limit: 2) {
      edges {
        node {
          id
          title
          excerpt
          uri
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
