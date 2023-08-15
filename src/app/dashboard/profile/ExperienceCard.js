import React from "react";

const ExperienceCard = () => {
  return (
    <div
      className={`mt-6 border border-solid card flex justify-between gap-4 p-4`}
    >
      <div className="flex justify-between items-center w-full">
        <img
          src="https://i.ibb.co/NYHF7nk/76626656-s-400-v-4.png"
          alt="Toufiquer Rahman Image"
          className="h-20 w-20 order-2"
        />
        {/* Details */}
        <div className="flex flex-col gap-2 w-full pr-2">
          <div className="flex justify-between">
            <h3 className="text-2xl text-bold">7Years (2014-2021)</h3>
            <h3 className="text-2xl text-bold">Full Time</h3>
          </div>
          <div className="flex justify-between">
            <h3 className="text-xl">Company</h3>
            <h3 className="text-xl"> -- Full Stack Developer</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
