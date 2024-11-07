"use client";
import { Employee, LaData } from "@/types/employees"; // Nhập kiểu Employee từ file employees.ts
import useEmployeesData from "@/states/useEmployeesData"; // Nhập hook lấy dữ liệu từ API

const TableOne = () => {
  const { employeeLaData, loading, error } = useEmployeesData(); // Lấy dữ liệu từ hook

  if (loading) return <div>Loading...</div>; // Nếu đang tải
  if (error) return <div>{error}</div>; // Nếu có lỗi

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

        {employeeLaData.map((laData: LaData, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === employeeLaData.length - 1
                ? ""
                : "border-b border-stroke dark:border-dark-3"
            }`}
            key={key}
          >
            <div className="flex items-center gap-3.5 px-2 py-4">
              <p className="font-medium text-dark dark:text-white">
                {new Date(laData.ISSUE_DATE).toLocaleDateString("vi-VN")}
              </p>
            </div>

            <div className="flex items-center justify-center px-2 py-4">
              <p className="font-medium text-dark dark:text-white">
                {laData.TOUCH_COMPANY_INFO}
              </p>
            </div>

            <div className="flex items-center justify-center px-2 py-4">
              <p className="font-medium text-green-light-1">
                {laData.TOUCH_COMPANY_PHONE}
              </p>
            </div>

            <div className="hidden items-center justify-center px-2 py-4 sm:flex">
              <p className="font-medium text-dark dark:text-white">
                {laData.GPCNTT_SOLUTION_NAME}
              </p>
            </div>

            <div className="hidden items-center justify-center px-2 py-4 sm:flex">
              <p className="font-medium text-dark dark:text-white">
                {laData.GPCNTT_CONTRACT_VALUE.toLocaleString("vi-VN")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
