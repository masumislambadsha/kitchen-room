import React from "react";
import { CookingPot, Heater, ScrollText } from "lucide-react";

const States = ({orderTotal}) => {
  return (
    <div className="container mx-auto py-10 gird grid-cols-1 lg:grid-cols-3 gap-5">
      {/* Total order */}
      <div className="border-4 border-amber-400 border-dotted rounded-2xl border-primary p-5">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <ScrollText  className="animate-pulse" color="#fcb700" size={100} />
          <div className="text-xl text-center">
            Current Orders
            <h2 className="text-6xl font-bold">{orderTotal}</h2>
          </div>
        </div>
      </div>
      <div className="border-4 border-amber-400 border-dotted rounded-2xl border-primary p-5">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <Heater className="animate-pulse" color="#fcb700" size={100} />
          <div className="text-xl text-center">
            Current Cooking
            <h2 className="text-6xl font-bold">{0}</h2>
          </div>
        </div>
      </div>
      <div className="border-4 border-amber-400 border-dotted rounded-2xl border-primary p-5">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <CookingPot className="animate-pulse" color="#fcb700" size={100} />
          <div className="text-xl text-center">
           Orders Ready
            <h2 className="text-6xl font-bold">{0}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default States;
