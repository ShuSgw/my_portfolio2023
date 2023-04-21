import React from "react";
import Card from "./Card";
import {Link, graphql} from "gatsby";
import {GatsbyImage} from "gatsby-plugin-image";

const Cards = ({list}) => {
  console.log(list);
  return list.map((cardItem) => {
    cardItem = cardItem.node;
    return (
      <Card
        ttl={cardItem.title}
        key={cardItem.id}
        excerpt={cardItem.excerpt}
        featuredImage={cardItem.featuredImage}
        uri={cardItem.uri}
      />
    );
  });
};

export default Cards;
