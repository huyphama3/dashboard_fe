"use client";
import React, { useState } from "react";
import InputGroup from "@/components/FormElements/InputGroup";

interface SelectGroupITProps {
  onDataChange: (data: any) => void;
}

const SelectGroupIT: React.FC<SelectGroupITProps> = ({ onDataChange }) => {
  const [selectedIT, setSelectedIT] = useState<string>("");

  // State cho từng trường input cụ thể dựa trên các ánh xạ đã cung cấp
  const [formData, setFormData] = useState({
    solutionName: "",
    companyName: "",
    contractRevenue: "",
    otherServiceName: "",
    otherServiceRevenue: "",
  });
  // Hàm cập nhật để xử lý thay đổi cho từng trường input
  const handleInputChange = (field: string, value: string) => {
    // Cập nhật formData và gọi onDataChange để gửi dữ liệu về FormLayout
    setFormData((prevData) => {
      const updatedData = { ...prevData, [field]: value };

      // Gửi updatedData về FormLayout qua onDataChange
      onDataChange(updatedData);

      return updatedData;
    });
  };

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
        <option value="OtherRevenue">Doanh thu khác (Cloud, Camera...)</option>
      </select>

      {selectedIT === "ContractType" && (
        <div>
          <InputGroup
            label="Tên giải pháp"
            type="text"
            placeholder="Nhập tên giải pháp"
            customClasses="mb-4"
            required
            value={formData.solutionName}
            onChange={(e) => handleInputChange("solutionName", e.target.value)}
          />
          <InputGroup
            label="Tên Doanh nghiệp"
            type="text"
            placeholder="Nhập tên doanh nghiệp"
            customClasses="mb-4"
            required
            value={formData.companyName}
            onChange={(e) => handleInputChange("companyName", e.target.value)}
          />
          <InputGroup
            label="Giá trị hợp đồng"
            type="number"
            placeholder="Nhập giá trị hợp đồng"
            customClasses="mb-4"
            required
            value={formData.contractRevenue}
            onChange={(e) =>
              handleInputChange("contractRevenue", e.target.value)
            }
          />
        </div>
      )}
      {selectedIT === "OtherRevenue" && (
        <div>
          <InputGroup
            label="Tên dịch vụ"
            type="text"
            placeholder="Tên dịch vụ"
            customClasses="mb-4"
            value={formData.otherServiceName}
            onChange={(e) =>
              handleInputChange("otherServiceName", e.target.value)
            }
          />
          <InputGroup
            label="Doanh thu mang lại"
            type="text"
            placeholder="Doanh thu mang lại"
            customClasses="mb-4"
            value={formData.otherServiceRevenue}
            onChange={(e) =>
              handleInputChange("otherServiceRevenue", e.target.value)
            }
          />
        </div>
      )}
    </div>
  );
};

export default SelectGroupIT;
