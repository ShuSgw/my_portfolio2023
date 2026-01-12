import React from "react";
import Card from "./Card";
import formatDate from "../../../utils/formatDate";

const Cards = ({ list, theCurrentLang }) => {
  return list.map((cardItem) => {
    cardItem = cardItem.node;

    let allTheContents = {
      title: cardItem.title,
      excerpt: cardItem.excerpt,
    };

    if (
      theCurrentLang == "en" &&
      cardItem.english.englishTitle &&
      cardItem.english.englishExcerpt
    ) {
      allTheContents.title = cardItem.english.englishTitle;
      allTheContents.excerpt = cardItem.english.englishExcerpt;
    }
    console.log(cardItem);

    const formattedDate = formatDate(cardItem.date, theCurrentLang);

    return (
      <Card
        ttl={allTheContents.title}
        key={cardItem.id}
        excerpt={allTheContents.excerpt}
        featuredImage={cardItem.featuredImage}
        uri={cardItem.uri}
        date={formattedDate}
        tags={cardItem.tags.nodes}
      />
    );
  });
};

export default Cards;
