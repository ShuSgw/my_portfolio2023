import React from "react";
import {SiJquery, SiPhp} from "react-icons/si";
import {RiArrowRightSFill} from "react-icons/ri";
import {StaticImage} from "gatsby-plugin-image";

import TimelineItem from "../../timeline/TimelineItem";
import {v4 as uuidv4} from "uuid";

const Experience = ({timelines}) => {
  const experienceObj = [
    {
      company: "Richmond International Technology Corp.",
      jobTitle: "Web developer",
      period: "Mar 2022 - Jan 2023",
      area: "Vancouver, British Columbia, Canada",
      srcImg: "drbateryLogo",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      company: "Mellow Plus Creative Inc.",
      jobTitle: "Web developer",
      period: "Jun 2020 - Mar 2022",
      area: "Vancouver, British Columbia, Canada",
      srcImg: "mellow_Logo",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      company: "HRC Education Canada",
      jobTitle: "Web Developer and Designer",
      period: "Dec 2018 - Jun 2019",
      area: "Vancouver, British Columbia, Canada",
      srcImg: "hrc_logo",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      company: "Keller Williams Realty, Inc.",
      jobTitle: "Website Administrator",
      period: "Sep 2018",
      area: "Vancouver, British Columbia, Canada",
      srcImg: "keller_logo",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];

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
