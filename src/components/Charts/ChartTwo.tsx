import { ApexOptions } from "apexcharts";
import React from "react";
import ReactApexChart from "react-apexcharts";
import DefaultSelectOption from "@/components/SelectOption/DefaultSelectOption";
import useSalesData from "@/states/useSalesData";
import useEmployeesData from "@/states/useEmployeesData";
const ChartTwo: React.FC = () => {
  const { salesData, loading, error } = useSalesData();
  const { employeeNames } = useEmployeesData();
  // Nếu dữ liệu đang tải hoặc có lỗi, hiển thị thông báo
  if (loading) {
    return <div>Đang tải dữ liệu...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const series = [
    {
      name: "Doanh số",
      data: salesData.length > 0 ? salesData : [0, 0, 0, 0], // Nếu chưa có dữ liệu, hiển thị mảng trống
    },

    {
      name: "Chỉ tiêu",
      data: [8000000, 8000000, 8000000, 8000000],
    },
  ];

  const options: ApexOptions = {
    colors: ["#5750F1", "#0ABEF9"],
    chart: {
      fontFamily: "Satoshi, sans-serif",
      type: "bar",
      height: 335,
      stacked: false,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },

    responsive: [
      {
        breakpoint: 1536,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 3,
              columnWidth: "25%",
            },
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 3,
        columnWidth: "25%",
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "last",
      },
    },
    dataLabels: {
      enabled: false,
    },

    grid: {
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },

    xaxis: {
      categories: employeeNames, // Sử dụng tên nhân viên từ API
      labels: {
        rotate: -45, // Xoay nhãn -45 độ để tránh chồng lên nhau
        style: {
          fontSize: "12px", // Có thể giảm fontSize nếu cần
        },
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      fontFamily: "Roboto",
      fontWeight: 500,
      fontSize: "14px",

      markers: {
        radius: 99,
        width: 16,
        height: 16,
        strokeWidth: 10,
        strokeColor: "transparent",
      },
    },
    fill: {
      opacity: 1,
    },
  };

  return (
    <div className="col-span-12 rounded-[10px] bg-white px-7.5 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card xl:col-span-5">
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-body-2xlg font-bold text-dark dark:text-white">
            Kết quả tháng này
          </h4>
        </div>
        <div>
          <DefaultSelectOption options={["This Week", "Last Week"]} />
        </div>
      </div>

      <div>
        <div id="chartTwo" className="-ml-3.5">
          <ReactApexChart
            options={options}
            series={series}
            type="bar"
            height={370}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartTwo;
