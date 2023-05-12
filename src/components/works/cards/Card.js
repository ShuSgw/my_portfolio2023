import React from "react";
import {Link, graphql} from "gatsby";
import CardImage from "./CardImage";

const Card = ({ttl, excerpt, featuredImage, uri}) => {
  return (
    <>
      <Link
        to={`/works${uri}`}
        className="w-full mt-5 mx-auto max-w-lg flex flex-col bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-none hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <CardImage featuredImage={featuredImage} />
        <div className="flex flex-col p-4 leading-normal md:w-full">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {ttl}
          </h5>

          <p
            className="mb-3 font-normal text-gray-700 dark:text-gray-400"
            dangerouslySetInnerHTML={{__html: excerpt}}
          />
        </div>
      </Link>
    </>
  );
};

export default Card;
