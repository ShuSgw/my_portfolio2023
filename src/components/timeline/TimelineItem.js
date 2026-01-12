import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { useStaticQuery, graphql } from "gatsby";

const TimelineItem = ({ eachExp }) => {
  const companyLogoImageData = useStaticQuery(
    graphql`
      {
        allFile(filter: { sourceInstanceName: { eq: "companyLogo" } }) {
          edges {
            node {
              publicURL
              name
            }
          }
        }
      }
    `
  );

  const filterTheImage = (companyLogoImageData, theImage) => {
    let theLogo = "";
    companyLogoImageData.forEach((eachLogo) => {
      if (eachLogo.node.name == theImage) {
        theLogo = eachLogo.node.publicURL;
      }
    });
    return theLogo;
  };

  const qrryImageSorce = companyLogoImageData.allFile.edges;
  return (
    <>
      <div className="py-10 flex flex-col md:flex-row border-b border-gray-300">
        <div className="">
          <div className="relative flex">
            <div>
              <span className="block font-body font-bold text-grey-40">
                {eachExp.company}
              </span>
              <span className="block pt-4 font-header text-xl font-bold text-primary md:pt-1">
                {eachExp.jobTitle}
              </span>
              <div className="flex gap-3">
                <div className="text-slate-500 font-bod pt-1">
                  <span className="">{eachExp.area}</span>
                </div>
                <div className="text-slate-500 font-bod pt-1">
                  <span className="">{eachExp.period}</span>
                </div>
              </div>
              <div className="pt-2">
                <span className="block font-body">{eachExp.description}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimelineItem;
