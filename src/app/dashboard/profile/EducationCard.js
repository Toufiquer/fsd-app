import React from "react";

const EducationCard = () => {
  return (
    <div
      className={`mt-6 border border-solid card flex justify-between gap-4 p-4`}
    >
      <div className="flex justify-between items-center w-full">
        {/* Details */}
        <div className="flex flex-col gap-2 w-full pr-2">
          <div className="flex justify-between">
            <h3 className="text-2xl text-bold">Nation University</h3>
          </div>
          <div className="flex justify-between">
            <h3 className="text-xl">(2014-2021)</h3>
            <h3 className="text-xl">Batch</h3>
          </div>
          <p className={` text-justify`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            aspernatur iste autem ea, reiciendis maiores pariatur ipsam hic
            aliquid, dolorem aut exercitationem tempora sed culpa voluptas
            doloremque totam tenetur illum!
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
