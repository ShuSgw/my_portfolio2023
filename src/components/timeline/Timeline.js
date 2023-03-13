import React from "react";
//

import {useStaticQuery, graphql} from "gatsby";
import TimelineItem from "./TimelineItem";
import {v4 as uuidv4} from "uuid";

const Timeline = () => {
  // const data = useStaticQuery(
  //   graphql`
  //     query timelineListQuery {
  //       allTimelineJson {
  //         nodes {
  //           timeline {
  //             name
  //             website
  //             duties
  //             period
  //           }
  //         }
  //       }
  //     }
  //   `
  // );

  // const listOfTimelines = data.allTimelineJson.nodes[0].timeline;

  // const timelineItem = listOfTimelines.map((eachTimeline) => (
  //   <TimelineItem key={uuidv4()} timelineItemVals={eachTimeline} />
  // ));

  return <ul className="relative">{/* <div>{timelineItem}</div> */}</ul>;
};

export default Timeline;
