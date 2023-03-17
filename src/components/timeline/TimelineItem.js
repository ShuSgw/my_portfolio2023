import React from "react";
import {StaticImage} from "gatsby-plugin-image";

import {useStaticQuery, graphql} from "gatsby";

const TimelineItem = ({eachExp}) => {
  // const imageSrc = `../../../content/images/${eachExp.srcImg}`;
  // console.log(imageSrc);

  const companyLogoImageData = useStaticQuery(
    graphql`
      {
        allFile(filter: {sourceInstanceName: {eq: "companyLogo"}}) {
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

  // const qrryImageSorce = companyLogoImageData.allFile.edges[0].node;
  const qrryImageSorce = companyLogoImageData.allFile.edges;
  return (
    <>
      <div className="py-10 flex flex-col text-center md:flex-row md:text-left border-b border-gray-300">
        <div className="md:w-1/5 flex justify-center items-center">
          <img
            width={120}
            src={`${filterTheImage(qrryImageSorce, eachExp.srcImg)}`}
            alt=""
          />
        </div>
        <div className="md:w-4/5">
          <div className="relative flex md:pl-18">
            <div className="mt-1 flex">
              <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
              <div className="md:-mt-1 md:pl-8">
                <span className="block font-body font-bold text-grey-40">
                  {eachExp.company}
                </span>
                <span className="block pt-1 font-header text-xl font-bold text-primary">
                  {eachExp.jobTitle}
                </span>
                <div className="text-slate-500 font-bod pt-1 ">
                  <span className="">{eachExp.area}</span>
                </div>
                <div className="text-slate-500 font-bod pt-1">
                  <span className="">{eachExp.period}</span>
                </div>
                <div className="pt-2">
                  <span className="block font-body text-black">
                    {eachExp.description}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimelineItem;
