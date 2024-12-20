"use client";

import { ThongTinHopDong } from "@/types/doanhso";
import useSalesData from "@/states/useSalesData";
const TableOne = () => {
  return (
    <div className="rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card">
      <h4 className="mb-5.5 text-body-2xlg font-bold text-dark dark:text-white">
        Danh sách hợp đồng
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 sm:grid-cols-5">
          <div className="px-2 pb-3.5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Ngày ký hợp đồng
            </h5>
          </div>
          <div className="px-2 pb-3.5 text-center">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Thông tin doanh nghiệp
            </h5>
          </div>
          <div className="px-2 pb-3.5 text-center">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Điên thoại doanh nghiệp
            </h5>
          </div>
          <div className="hidden px-2 pb-3.5 text-center sm:block">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Tên giải pháp
            </h5>
          </div>
          <div className="hidden px-2 pb-3.5 text-center sm:block">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Giá trị hợp đồng (vnđ)
            </h5>
          </div>
        </div>

        {/* {hopDongData.map((hdData: ThongTinHopDong, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === hopDongData.length - 1
                ? ""
                : "border-b border-stroke dark:border-dark-3"
            }`}
            key={key}
          >
            <div className="flex items-center gap-3.5 px-2 py-4">
              <p className="font-medium text-dark dark:text-white">
                {new Date(hdData.ISSUE_DATE).toLocaleDateString("vi-VN")}
              </p>
            </div>

            <div className="flex items-center justify-center px-2 py-4">
              <p className="font-medium text-dark dark:text-white">
                {hdData.TOUCH_COMPANY_INFO}
              </p>
            </div>

            <div className="flex items-center justify-center px-2 py-4">
              <p className="font-medium text-green-light-1">
                {hdData.TOUCH_COMPANY_PHONE}
              </p>
            </div>

            <div className="hidden items-center justify-center px-2 py-4 sm:flex">
              <p className="font-medium text-dark dark:text-white">
                {hdData.GPCNTT_SOLUTION_NAME}
              </p>
            </div>

            <div className="hidden items-center justify-center px-2 py-4 sm:flex">
              <p className="font-medium text-dark dark:text-white">
                {hdData.GPCNTT_CONTRACT_VALUE.toLocaleString("vi-VN")}
              </p>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default TableOne;
