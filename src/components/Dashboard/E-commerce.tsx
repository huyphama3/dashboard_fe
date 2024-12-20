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
      <div className="flex h-screen w-full items-center justify-center">
        <iframe
          title="Bao_cao_thu_viec"
          width="100%"
          height="97%"
          src="https://app.powerbi.com/view?r=eyJrIjoiMDJiMjE4NzMtOWZhMi00OWUwLTlmMWYtNjMyOGZjZGRlYTk3IiwidCI6ImYzYWNiMTYyLWEyNjctNDVhMi1iOTVlLThiOTdmYWU5MTI1ZiIsImMiOjEwfQ%3D%3D"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default ECommerce;
