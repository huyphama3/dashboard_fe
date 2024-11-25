"use client";
import React from "react";
import ChartThree from "../Charts/ChartThree";
import ChartTwo from "../Charts/ChartTwo";
import ChatCard from "../Chat/ChatCard";
import TableOne from "../Tables/TableOne";

import DataStatsOne from "@/components/DataStats/DataStatsOne";
import ChartOne from "@/components/Charts/ChartOne";

const ECommerce: React.FC = () => {
  return (
    <>
      {/* <DataStatsOne /> */}
      {/* <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <div className="col-span-12 xl:col-span-7">
          <TableOne />
        </div>
        <ChartThree />
      </div> */}
      <div>
        <iframe
          title="dashboard_tongquat"
          width="1524"
          height="1000"
          src="https://app.powerbi.com/view?r=eyJrIjoiYmE5ZmEyZjgtN2UxMy00ZjcwLTliYWQtMDQ2YWIxMDhhODE5IiwidCI6ImYzYWNiMTYyLWEyNjctNDVhMi1iOTVlLThiOTdmYWU5MTI1ZiIsImMiOjEwfQ%3D%3D"
          frameborder="0"
          allowFullScreen="true"
        ></iframe>
      </div>
    </>
  );
};

export default ECommerce;
