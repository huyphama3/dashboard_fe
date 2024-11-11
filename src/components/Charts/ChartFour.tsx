"use client";
import { ApexOptions } from "apexcharts";
import React from "react";
import ReactApexChart from "react-apexcharts";

const ChartFour: React.FC = () => {
  const series = [
    {
      name: "Visitors",
      data: [168, 385, 201, 298, 187, 195, 291],
    },
  ];

  const options: ApexOptions = {
    colors: ["#5750F1"],
    chart: {
      fontFamily: "Roboto, sans-serif",
      type: "bar",
      height: 200,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "40%",
        borderRadius: 3,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 4,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["M", "T", "W", "T", "F", "S", "S"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "left",
      fontFamily: "Roboto Mono",

      markers: {
        radius: 99,
      },
    },
    grid: {
      strokeDashArray: 7,
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    fill: {
      opacity: 1,
    },

    tooltip: {
      x: {
        show: false,
      },
    },
  };

  return (
    <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
      <div className="flex justify-between border-b border-stroke px-6 pb-4.5 pt-5.5 dark:border-dark-3">
        <div>
          <h2 className="mb-1.5 text-body-2xlg font-bold text-dark dark:text-white">
            Tiến Độ Theo Tuần
          </h2>
        </div>
        <div>
          <h3 className="mb-0.5 text-body-2xlg font-bold text-dark dark:text-white">
            3,945,092 vnđ
          </h3>
        </div>
      </div>

      <div className="px-6 pb-1 pt-7.5">
        <div id="chartFour" className="-ml-3.5">
          <ReactApexChart
            options={options}
            series={series}
            type="bar"
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartFour;
