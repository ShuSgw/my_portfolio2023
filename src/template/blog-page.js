import React from "react";
import {graphql, Link} from "gatsby";
import Pagination from "../components/works/pagination/pagination";

const BlogPage = ({data}) => {
  return (
    <div>
      <ul>
        {data.allWpPost.edges.map(({node}) => (
          <li key={node.id}>
            <Link to={`/works${node.uri}`}>{node.title}</Link>
          </li>
        ))}
      </ul>
      <Pagination totalCount={data.allWpPost.totalCount} />
    </div>
  );
};

export default BlogPage;

export const query = graphql`
  query ($limit: Int!, $skip: Int!) {
    allWpPost(limit: $limit, skip: $skip) {
      edges {
        node {
          id
          title
          uri
        }
      }
      totalCount
    }
  }
`;
