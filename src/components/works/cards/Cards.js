import React from "react";
import Card from "./Card";
import {Link, graphql} from "gatsby";
import {GatsbyImage} from "gatsby-plugin-image";

const Cards = ({list, theCurrentLang}) => {
  const langFilter = (theCurrentLang) => {
    if (theCurrentLang == "ja") {
      return "japanese";
    } else {
      return "english";
    }
  };
  return list.map((cardItem) => {
    cardItem = cardItem.node;
    let cardCats = cardItem.categories.nodes;
    if (
      cardCats.some((cardCat) =>
        cardCat.slug.includes(langFilter(theCurrentLang))
      )
    ) {
      return (
        <Card
          ttl={cardItem.title}
          key={cardItem.id}
          excerpt={cardItem.excerpt}
          featuredImage={cardItem.featuredImage}
          uri={cardItem.uri}
        />
      );
    }
  });
};

export default Cards;
