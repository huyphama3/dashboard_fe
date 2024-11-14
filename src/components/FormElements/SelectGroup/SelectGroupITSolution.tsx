"use client";
import React, { useState } from "react";
import InputGroup from "@/components/FormElements/InputGroup";

const SelectGroupIT: React.FC = () => {
  const [selectedIT, setSelectedIT] = useState<string>("");

  return (
    <div className="mb-4.5">
      <label className="mb-2 block pl-3 text-body-sm text-dark dark:text-white">
        Chọn Lựa Chọn Giải Pháp Công Nghệ Thông Tin
      </label>

      <select
        value={selectedIT}
        onChange={(e) => setSelectedIT(e.target.value)}
        className="relative z-20 mb-4 w-full appearance-none rounded-[7px] border border-stroke bg-transparent px-5.5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-dark-3 dark:bg-dark-2 dark:focus:border-primary"
      >
        <option value="" disabled>
          Chọn Lựa Chọn
        </option>
        <option value="ContractType">Hợp đồng Giải pháp GPS/NTS/HTS</option>
      </select>

      {selectedIT === "ContractType" && (
        <div>
          <InputGroup
            label="Tên giải pháp"
            type="text"
            placeholder="Nhập tên giải pháp"
            customClasses="mb-4"
            required
          />
          <InputGroup
            label="Tên Doanh nghiệp"
            type="text"
            placeholder="Nhập tên doanh nghiệp"
            customClasses="mb-4"
            required
          />
          <InputGroup
            label="Giá trị hợp đồng"
            type="number"
            placeholder="Nhập giá trị hợp đồng"
            customClasses="mb-4"
            required
          />
        </div>
      )}
    </div>
  );
};

export default SelectGroupIT;
