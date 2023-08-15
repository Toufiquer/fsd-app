import React from "react";

const Skills = () => {
  return (
    <div className="card w-full bg-slate-700 text-primary-content">
      <div className="card-body">
        {/* Skills */}
        <div className="my-2">
          <div className="flex justify-between items-center w-full">
            <h2 className="card-title">Skills</h2>
            <button className="btn btn-sm mb-[-20px]">Update</button>
          </div>
          <p>NextJs</p>
          <p>TypeScript</p>
          <p>Node</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
