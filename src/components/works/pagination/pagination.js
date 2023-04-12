import React from "react";
import {Link} from "gatsby";

const Pagination = ({totalCount}) => {
  const PER_PAGE = 2;

  const range = (start, end) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  return (
    <ul>
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <li key={index}>
          <Link to={`/works/${number}`}>{number}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
