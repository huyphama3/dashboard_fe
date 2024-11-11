"use client";

import ChartThree from "@/components/Charts/ChartThree";
import React from "react";
import ChartFive from "@/components/Charts/ChartFive";
import ChartFour from "@/components/Charts/ChartFour";
const BasicChart: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <ChartThree />
        <div className="col-span-12 xl:col-span-5">
          <ChartFive />
        </div>
        <div className="col-span-12 xl:col-span-12">
          <ChartFour />
        </div>
      </div>
    </>
  );
};

export default BasicChart;
