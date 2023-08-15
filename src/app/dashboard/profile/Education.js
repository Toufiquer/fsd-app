import React from "react";
import ExperienceCard from "./ExperienceCard";
import EducationCard from "./EducationCard";

const Education = () => {
  return (
    <div className="card w-full bg-slate-700 text-primary-content">
      <div className="card-body">
        {/* Education */}
        <div className="my-2">
          <div className="flex justify-between items-center w-full">
            <h2 className="card-title">Education</h2>
            <button className="btn btn-sm mb-[-20px]">Update</button>
          </div>
          <div className="gap-4">
            <EducationCard />
            <EducationCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
