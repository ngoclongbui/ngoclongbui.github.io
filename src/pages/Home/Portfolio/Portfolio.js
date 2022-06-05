import React, { Fragment, memo } from "react";
import CartProject from "../../../components/CartProject/CartProject";
import dataProject from "../../../data/dataProject.json";

const { lstProject } = dataProject;

function Portfolio(props) {
  const renderProject = () =>
    lstProject.map((project, index) => (
      <Fragment key={index}>
        <CartProject project={project} />
      </Fragment>
    ));

  return (
    <div className="w-full h-[88%]">
      <p className="text-2xl text-right font-light mx-5 mt-5 mb-0 ">
        Portfolio
      </p>
      <div className="flex items-center w-full h-full px-5 mr-5 overflow-x-auto">
        {renderProject()}
      </div>
    </div>
  );
}

export default memo(Portfolio);
