import React from "react";

export default function CartProject(props) {
  const { project } = props;
  return (
    <div className="flex flex-wrap content-between min-w-[300px] w-[250px] h-[410px] mt-4 mb-2 mx-5 p-5 rounded-[10px] bg-[#c0ccd680] shadow-[5px_-5px_20px_rgba(0,0,0,0.25)]">
      <div>
        <h3 className="text-2xl font-light m-0">{project.name}</h3>
        <p className="text-lg font-light mt-3">{project.describe}</p>
        <p className="text-lg font-light mt-3 mb-0">framework, libraries:</p>
        <ul className="w-[260px] text-lg font-light list-disc pl-5 max-h-[140px] overflow-y-auto">
          {project.libraries.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </div>
      <div className="flex w-full justify-around">
        <a
          className="text-base font-light border rounded-md text-slate-900 border-slate-900 p-3 transition hover:shadow-[0px_0px_10px_5px_rgba(0,0,0,0.25)]"
          href={project.linkSource}
          target="_blank"
          rel="noreferrer"
        >
          Source code
        </a>
        <a
          href={project.linkView}
          target="_blank"
          className="text-base font-light border rounded-md  border-slate-500 bg-slate-900 text-white p-3 transition hover:shadow-[0px_0px_10px_5px_rgba(0,0,0,0.25)] "
          rel="noreferrer"
        >
          View project
        </a>
      </div>
    </div>
  );
}
