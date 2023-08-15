"use client";

import { useState } from "react";

const PopUp = ({ name, content }) => {
  const [toggle, setToggle] = useState(false);
  const isPopUp = () => {
    setToggle((pre) => !pre);
  };
  return (
    <>
      <button onClick={isPopUp} className="btn btn-sm">
        {name || "Btn Name"}
      </button>
      {toggle && (
        <div
          className={`z-50 w-full h-screen fixed top-0 left-0 backdrop-blur-sm`}
        >
          <div className="w-full h-screen flex items-center justify-center">
            {/* Center Content */}
            <div className="max-w-[700px] w-full">
              <div
                className={`mt-6 border border-solid card flex justify-between gap-4 p-4  bg-slate-800`}
              >
                <div className="flex justify-between items-center w-full">
                  {/* Details */}
                  <div className="flex flex-col gap-2 w-full pr-2">
                    <div className="flex justify-between mb-6">
                      <h3 className="text-2xl text-bold">Update</h3>
                      <button onClick={isPopUp}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                    {/* Content */}
                    {content || (
                      <div className="p-1 w-full flex flex-col gap-4">
                        <div className="flex justify-between">
                          <h3 className="text-xl">Name</h3>
                        </div>
                        <input
                          type="text"
                          placeholder="Type here"
                          className="input input-bordered input-primary w-full"
                        />

                        <input
                          onClick={isPopUp}
                          type="button"
                          value="Submit"
                          className="btn max-w-sm mx-auto"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUp;
