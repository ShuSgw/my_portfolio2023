import React from "react";
import TimelineItem from "../../timeline/TimelineItem";
import { v4 as uuidv4 } from "uuid";

const Experience = ({ timelines }) => {
  return (
    <section className="relative rounded-xl overflow-auto pt-16 md:pt-20">
      <h2 className="font-bold font-header text-4xl lg:text-4xl">
        Experiences
        {console.log(timelines)}
      </h2>
      {timelines.map((eachExp) => (
        <TimelineItem key={uuidv4()} eachExp={eachExp} />
      ))}
    </section>
  );
};

export default Experience;
