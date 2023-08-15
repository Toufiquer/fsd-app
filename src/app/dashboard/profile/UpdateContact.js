import React from "react";

const UpdateContact = () => {
  return (
    <div className="card w-full bg-slate-700 text-primary-content">
      <div className="card-body">
        {/* Your Name */}
        <div className="my-2">
          <div className="flex justify-between items-center w-full">
            <h2 className="card-title">Your Name</h2>
            <button className="btn btn-sm mb-[-20px]">Update</button>
          </div>
          <p>Name of the Person</p>
        </div>
        {/* Email */}
        <div className="my-2">
          <div className="flex justify-between items-center w-full">
            <h2 className="card-title">Email</h2>
            <button className="btn btn-sm mb-[-20px]">Update</button>
          </div>
          <p>Name of the Person</p>
        </div>
        {/* Phone Number */}
        <div className="my-2">
          <div className="flex justify-between items-center w-full">
            <h2 className="card-title">Phone Number</h2>
            <button className="btn btn-sm mb-[-20px]">Update</button>
          </div>
          <p>Name of the Person</p>
        </div>
      </div>
    </div>
  );
};

export default UpdateContact;
