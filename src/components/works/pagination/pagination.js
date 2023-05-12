import React from "react";
import {Link} from "gatsby";

const Pagination = ({totalCount, thePage}) => {
  const PER_PAGE = 2;

  const range = (start, end) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  const currentNation =
    "inline-block px-3 py-2 text-grey-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white";
  const otherNation =
    "inline-block px-3 py-2 text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";

  return (
    <div className="text-center">
      <ul className="inline-flex -space-x-px mt-10 ml-auto">
        {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
          <li key={index}>
            <Link
              className={`${number !== thePage ? otherNation : currentNation}`}
              to={`/worklist/${number}`}
            >
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
