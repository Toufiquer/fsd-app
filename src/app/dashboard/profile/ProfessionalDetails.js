import React from "react";
import { BiStar } from "react-icons/bi";

const ProfessionalDetails = () => {
  return (
    <div className="card bg-slate-700 p-6">
      <div className="grid grid-cols-1">
        <div className="flex justify-between items-center w-full">
          <h2 className="card-title text-2xl">Professional Details</h2>
          <button className="btn btn-sm mb-[-20px]">Update</button>
        </div>
        <div className="flex justify-between items-center mt-6">
          <img
            src="https://i.ibb.co/NYHF7nk/76626656-s-400-v-4.png"
            alt="Toufiquer Rahman Image"
            className="h-20 w-20 order-2"
          />
          <p className="text-xl text-slate-300 text-justify pr-4">
            Full Stack Developer. Full Stack Developer Full Stack Developer Full
            Stack Developer Full Stack Developer Full Stack Developer Full Stack
            Developer Full Stack DeveloperFull Stack Developer Full Stack
            Developer Full Stack Developer
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalDetails;
