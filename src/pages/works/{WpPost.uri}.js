import React, {useEffect} from "react";
import {graphql} from "gatsby";
import {useI18next} from "gatsby-plugin-react-i18next";
import Layout from "../../components/global/layout/Layout";
import {AiFillGithub} from "react-icons/ai";
import {MdComputer} from "react-icons/md";
import {GatsbyImage} from "gatsby-plugin-image";

import makeTagList from "../../components/global/makeTagList/makeTagList";

const Post = ({data}) => {
  const {languages, originalPath, language, i18n} = useI18next();
  var sample;
  const langInfo = {
    languages,
    originalPath,
  };

  let allTheContents = {
    title: data.wpPost.title,
    content: data.wpPost.content,
    date: data.wpPost.date,
    tags: data.wpPost.tags.nodes,
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
        <div className="flex items-center space-x-2 text-sm">
          {allTheContents.date}
        </div>
        <div className="flex items-end">
          <div className="font-bold font-header text-4xl lg:text-4xl pt-1">
            {allTheContents.title}
          </div>
        </div>
        <div className="mt-1 flex flex-wrap gap-1 pt-3">
          {allTheContents.tags.map((tag) => (
            <span
              className={`text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 ${makeTagList(
                tag.name
              )} rounded-full`}
              key={tag.name}
            >
              {tag.name}
            </span>
          ))}
        </div>
        <div className="mt-5 flex justify-end gap-3 mb-3">
          {data.wpPost.additionalInfo.githuburl && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={data.wpPost.additionalInfo.githuburl}
              className="p-1 inline-flex items-center shadow-md bg-black shadow-black/50 text-white rounded px-2"
            >
              <AiFillGithub className="inline-block mr-1" />
              <span className="text-sm">GitHub</span>
            </a>
          )}
          {data.wpPost.additionalInfo.githuburl && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={data.wpPost.additionalInfo.siteurl}
              className="p-1 inline-flex items-center shadow-md bg-indigo-500 shadow-black/50 text-white rounded px-2"
            >
              <MdComputer className="inline-block mr-1" />
              <span className="text-sm">Live</span>
            </a>
          )}
        </div>
        <GatsbyImage
          className="w-full"
          image={
            data.wpPost.featuredImage.node.localFile.childImageSharp
              .gatsbyImageData
          }
          alt={
            data.wpPost.featuredImage.node.altText
              ? data.wpPost.featuredImage.node.altText
              : ""
          }
        />
        <div
          className="pt-7 gutenberg"
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
      date
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData(
                quality: 100
                placeholder: BLURRED
                layout: CONSTRAINED
                transformOptions: {cropFocus: CENTER}
                width: 2000
                height: 1500
              )
            }
          }
        }
      }
      tags {
        nodes {
          name
        }
      }
      english {
        englishContents
        englishTitle
        fieldGroupName
        englishExcerpt
      }
      additionalInfo {
        githuburl
        siteurl
      }
    }
  }
`;

export default Post;
