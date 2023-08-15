import React from "react";
import { BiStar } from "react-icons/bi";
const Card = () => {
  return (
    <div>
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="avatar online">
              <div className="w-16 rounded-full">
                {" "}
                <img
                  src="https://i.ibb.co/NYHF7nk/76626656-s-400-v-4.png"
                  alt="Toufiquer Rahman Image"
                />
              </div>
            </div>
          </div>
          <h2 className="text-3xl text-slate-200">Name of Person</h2>
          <h2 className="text-xl text-slate-300">Full Stack Developer</h2>
          <h2 className="text-xl text-slate-300 flex gap-4 items-center justify-start">
            <BiStar /> Orphans
          </h2>
          <button type="button" className="btn btn-sm mt-4 bg-slate-600">
            Connect
          </button>
          <button type="button" className="btn btn-sm mt-4 bg-slate-800">
            Remove Connection
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
