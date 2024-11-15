"use client";
import React, { useState } from "react";
import InputGroup from "@/components/FormElements/InputGroup";

interface SelectGroupTelecomProps {
  onDataChange: (data: any) => void;
}

const SelectGroupTelecom: React.FC<SelectGroupTelecomProps> = ({
  onDataChange,
}) => {
  const [selectedTelecom, setSelectedTelecom] = useState<string>("");

  // State cho từng trường input cụ thể dựa trên các ánh xạ đã cung cấp
  const [formData, setFormData] = useState({
    fiberCode: "",
    fiberCompanyName: "",
    fiberRevenue: "",
    prepaidPhoneNumber: "",
    prepaidSubscriptionPackage: "",
    prepaidRevenue: "",
    postpaidPhoneNumber: "",
    postpaidSubscriptionPackage: "",
    postpaidRevenue: "",
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
            label="Gói cước Fiber"
            type="text"
            placeholder="Nhập gói cước"
            customClasses="mb-4"
            value={formData.fiberCode}
            onChange={(e) => handleInputChange("fiberCode", e.target.value)}
          />
          <InputGroup
            label="Tên Doanh Nghiệp Fiber"
            type="text"
            placeholder="Tên Doanh Nghiệp"
            customClasses="mb-4"
            value={formData.fiberCompanyName}
            onChange={(e) =>
              handleInputChange("fiberCompanyName", e.target.value)
            }
          />
          <InputGroup
            label="Giá Trị Hợp Đồng Fiber"
            type="text"
            placeholder="Giá Trị Hợp Đồng"
            customClasses="mb-4"
            value={formData.fiberRevenue}
            onChange={(e) => handleInputChange("fiberRevenue", e.target.value)}
          />
        </div>
      )}
      {selectedTelecom === "NewSubscriptionBefore" && (
        <div>
          <InputGroup
            label="Số thuê bao Trả Trước"
            type="text"
            placeholder="Số thuê bao"
            customClasses="mb-4"
            value={formData.prepaidPhoneNumber}
            onChange={(e) =>
              handleInputChange("prepaidPhoneNumber", e.target.value)
            }
          />
          <InputGroup
            label="Gói cước đăng ký Trả Trước"
            type="text"
            placeholder="Gói cước đăng ký"
            customClasses="mb-4"
            value={formData.prepaidSubscriptionPackage}
            onChange={(e) =>
              handleInputChange("prepaidSubscriptionPackage", e.target.value)
            }
          />
          <InputGroup
            label="Doanh thu gói cước Trả Trước"
            type="text"
            placeholder="Doanh thu gói cước"
            customClasses="mb-4"
            value={formData.prepaidRevenue}
            onChange={(e) =>
              handleInputChange("prepaidRevenue", e.target.value)
            }
          />
        </div>
      )}
      {selectedTelecom === "NewSubscriptionAfter" && (
        <div>
          <InputGroup
            label="Số thuê bao Trả Sau"
            type="text"
            placeholder="Số thuê bao"
            customClasses="mb-4"
            value={formData.postpaidPhoneNumber}
            onChange={(e) =>
              handleInputChange("postpaidPhoneNumber", e.target.value)
            }
          />

          <InputGroup
            label="Gói cước đăng ký Trả Sau"
            type="text"
            placeholder="Gói cước đăng ký"
            customClasses="mb-4"
            value={formData.postpaidSubscriptionPackage}
            onChange={(e) =>
              handleInputChange("postpaidSubscriptionPackage", e.target.value)
            }
          />

          <InputGroup
            label="Doanh thu gói cước Trả Sau"
            type="text"
            placeholder="Doanh thu gói cước"
            customClasses="mb-4"
            value={formData.postpaidRevenue}
            onChange={(e) =>
              handleInputChange("postpaidRevenue", e.target.value)
            }
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

export default SelectGroupTelecom;
