"use client";
import React, { useState } from "react";
import InputGroup from "@/components/FormElements/InputGroup";

const SelectGroupTelecom: React.FC = () => {
  const [selectedTelecom, setSelectedTelecom] = useState<string>("");

  return (
    <div className="mb-4.5">
      <label className="mb-3 block text-body-sm text-dark dark:text-white">
        Chọn Lựa Chọn Viễn Thông
      </label>

      <select
        value={selectedTelecom}
        onChange={(e) => setSelectedTelecom(e.target.value)}
        className="relative z-20 mb-4 w-full appearance-none rounded-[7px] border border-stroke bg-transparent px-5.5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-dark-3 dark:bg-dark-2 dark:focus:border-primary"
      >
        <option value="" disabled>
          Chọn Lựa Chọn
        </option>
        <option value="MobiFiber">TB MobiFiber PTM</option>
        <option value="NewSubscriptionBefore">
          Thuê bao viễn thông Phát triển mới (Trả Trước)
        </option>
        <option value="NewSubscriptionAfter">
          Thuê bao viễn thông Phát triển mới (Trả Sau)
        </option>
        <option value="OtherRevenue">Doanh thu khác (Cloud, Camera...)</option>
      </select>

      {/* Display additional fields based on selection */}
      {selectedTelecom === "MobiFiber" && (
        <div>
          <InputGroup
            label="Gói cước"
            type="text"
            placeholder="Nhập gói cước"
            customClasses="mb-4"
          />
          <InputGroup
            label="Tên Doanh Nghiệp"
            type="text"
            placeholder="Tên Doanh Nghiệp"
            customClasses="mb-4"
          />
          <InputGroup
            label="Giá Trị Hợp Đồng"
            type="text"
            placeholder="Giá Trị Hợp Đồng"
            customClasses="mb-4"
          />
        </div>
      )}
      {selectedTelecom === "NewSubscriptionBefore" && (
        <div>
          <InputGroup
            label="Số thuê bao"
            type="text"
            placeholder="Số thuê bao"
            customClasses="mb-4"
          />
          <InputGroup
            label="Gói cước đăng ký"
            type="text"
            placeholder="Gói cước đăng ký"
            customClasses="mb-4"
          />
          <InputGroup
            label="Doanh thu gói cước"
            type="text"
            placeholder="Doanh thu gói cước"
            customClasses="mb-4"
          />
        </div>
      )}
      {selectedTelecom === "NewSubscriptionAfter" && (
        <div>
          <InputGroup
            label="Số thuê bao"
            type="text"
            placeholder="Số thuê bao"
            customClasses="mb-4"
          />
          <InputGroup
            label="Gói cước đăng ký"
            type="text"
            placeholder="Gói cước đăng ký"
            customClasses="mb-4"
          />
          <InputGroup
            label="Doanh thu gói cước"
            type="text"
            placeholder="Doanh thu gói cước"
            customClasses="mb-4"
          />
        </div>
      )}
      {selectedTelecom === "OtherRevenue" && (
        <div>
          <InputGroup
            label="Tên dịch vụ"
            type="text"
            placeholder="Tên dịch vụ"
            customClasses="mb-4"
          />
          <InputGroup
            label="Doanh thu mang lại"
            type="text"
            placeholder="Doanh thu mang lại"
            customClasses="mb-4"
          />
        </div>
      )}
    </div>
  );
};

export default SelectGroupTelecom;
