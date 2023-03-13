import React from "react";

const TimelineItem = (props) => {
  const values = props.timelineItemVals;

  const linkTitle = (
    <a
      href={values.website}
      target="_blank"
      rel="noopener noreferrer"
      className="dark:text-white hover:underline"
    >
      {values.name}
    </a>
  );

  const txtTitle = <span className="dark:text-white">{values.name}</span>;

  return (
    <li className="list-none">
      <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-0 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
        <svg
          aria-hidden="true"
          className="w-3 h-3 text-blue-600 dark:text-blue-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"></path>
        </svg>
      </span>
      <h3 className="mb-1 text-lg font-semibold text-gray-900">
        {values.website ? linkTitle : txtTitle}
      </h3>
      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {values.period}
      </time>
      <p className="text-base font-normal text-gray-500 dark:text-gray-400">
        {values.duties}
      </p>
      {/* <a
        href="#"
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
      >
        <svg
          className="w-4 h-4 mr-2"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
            clip-rule="evenodd"
          ></path>
        </svg>
        Download ZIP
      </a> */}
    </li>
  );
};

export default TimelineItem;
