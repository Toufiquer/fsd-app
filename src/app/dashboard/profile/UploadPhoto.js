import PopUp from "@/components/PopUp/PopUp";
import React from "react";

const UploadPhoto = () => {
  return (
    <div className="my-8">
      <div className="flex items-center justify-between w-full">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img
              src="https://i.ibb.co/NYHF7nk/76626656-s-400-v-4.png"
              alt="Toufiquer Rahman Image"
            />
          </div>
        </div>
        <PopUp />
        <button className="btn btn-sm">Upload Photo</button>
      </div>
    </div>
  );
};

export default UploadPhoto;
