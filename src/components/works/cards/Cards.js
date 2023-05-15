import React from "react";
import Card from "./Card";

const Cards = ({list, theCurrentLang}) => {
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
    return (
      <Card
        ttl={allTheContents.title}
        key={cardItem.id}
        excerpt={allTheContents.excerpt}
        featuredImage={cardItem.featuredImage}
        uri={cardItem.uri}
        date={cardItem.date}
        tags={cardItem.tags.nodes}
      />
    );
  });
};

export default Cards;
