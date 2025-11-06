import React from "react";

const OverviewCard = ({ title, icon, number }) => {
  return (
    <div className="bg-[#f7f7e3] px-10 py-10 flex flex-col gap-8 drop-shadow-sm rounded-xl">
      <div className="flex items-center justify-between text-[#504230]">
        <p className="capitalize font-semibold text-2xl sm:text-3xl">{title}</p>
        <p className="text-[#8a775c] text-2xl">{icon}</p>
      </div>
      <p className="text-[#504230] text-3xl sm:text-4xl font-bold">{number}</p>
    </div>
  );
};

export default OverviewCard;
