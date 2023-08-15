import React from "react";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="card w-full bg-slate-800 text-primary-content">
      <div className="card-body">
        {/* Experience */}
        <div className="my-2">
          <div className="flex justify-between items-center w-full">
            <h2 className="card-title">Experience</h2>
            <button className="btn btn-sm mb-[-20px]">Update</button>
          </div>
          <div className="gap-4">
            <ExperienceCard />
            <ExperienceCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
