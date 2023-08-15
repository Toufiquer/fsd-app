import React from "react";
const Certifications = () => {
  return (
    <div className="card bg-slate-700 p-6">
      <div className="grid grid-cols-1">
        <div className="flex justify-between items-center w-full">
          <h2 className="card-title text-2xl">Certifications</h2>
          <button className="btn btn-sm mb-[-20px]">Update</button>
        </div>
        <div className="flex justify-between items-center mt-6">
          <img
            src="https://i.ibb.co/NYHF7nk/76626656-s-400-v-4.png"
            alt="Toufiquer Rahman Image"
            className="h-40 w-40"
          />
          <div className="flex flex-col gap-4 w-full">
            <h2 className="text-4xl text-center">Python</h2>
            <h2 className="text-2xl text-center">coding Ninja</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
