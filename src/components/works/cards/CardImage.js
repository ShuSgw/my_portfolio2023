import React from "react";
import {Link, graphql} from "gatsby";
import {GatsbyImage, StaticImage} from "gatsby-plugin-image";

const CardImage = ({featuredImage}) => {
  const theImage = featuredImage ? (
    <GatsbyImage
      image={featuredImage.node.localFile.childImageSharp.gatsbyImageData}
      alt={featuredImage.node.altText ? featuredImage.node.altText : ""}
      className="object-cover w-full rounded-t-lg h-48 md:w-48 md:rounded-none md:rounded-l-lg"
    />
  ) : (
    <StaticImage
      src="../../../../content/images/face.png"
      width={600}
      alt="profile"
      placeholder="blurred"
      quality="40"
      className="object-cover w-full rounded-t-lg h-48 md:w-48 md:rounded-none md:rounded-l-lg"
    />
  );

  return theImage;
};

export default CardImage;
