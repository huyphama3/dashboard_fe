"use client";
import React, { useState } from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import SelectGroupOne from "@/components/FormElements/SelectGroup/SelectGroupOne";
import InputGroup from "@/components/FormElements/InputGroup";
import DatePickerOne from "@/components/FormElements/DatePicker/DatePickerOne";
import SelectGroupTelecom from "@/components/FormElements/SelectGroup/SelectGroupTelecom";
import SelectGroupIT from "@/components/FormElements/SelectGroup/SelectGroupITSolution";
import { InputGroupProps } from "@/types/inputGroup";

const FormLayout = () => {
  const [category, setCategory] = useState<string>("");
  const [fileDate, setFileDate] = useState<string>(""); // Dữ liệu ngày nhập hợp đồng
  const [issueDate, setIssueDate] = useState<string>(""); // Dữ liệu ngày ký hợp đồng
  const [empName, setEmpName] = useState<string>(""); // Họ tên
  const [donVi, setDonVi] = useState<string>(""); // Đơn vị
  const [empEmail, setEmpEmail] = useState<string>(""); // Email

  // State để lưu dữ liệu từ các trường trong SelectGroupTelecom và SelectGroupIT
  const [telecomData, setTelecomData] = useState({});
  const [itData, setItData] = useState({});

  const handleCategoryChange = (value: string) => {
    setCategory(value);
  };

  const handleTelecomDataChange = (data: any) => {
    setTelecomData(data); // Update telecomData with values from SelectGroupTelecom
  };

  // Hàm cập nhật dữ liệu từ SelectGroupIT
  const handleITDataChange = (data: any) => {
    setItData(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Kiểm tra nếu các trường bắt buộc chưa được điền
    if (!empName || !empEmail || !donVi) {
      alert("Vui lòng điền đầy đủ thông tin Họ Tên, Đơn Vị, và Email.");
      return;
    }
    const data = {
      fileDate,
      issueDate,
      empName,
      donVi,
      empEmail,
      ...(category === "Telecom" ? telecomData : {}),
      ...(category === "IT_Solution" ? itData : {}),
      // Các dữ liệu khác cần gửi
    };

    try {
      const response = await fetch(
        "http://localhost:8110/api/v1/submit/guidulieu",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      const result = await response.json();
      if (response.ok) {
        alert("Dữ liệu đã được gửi thành công!");

        // Reset tất cả state sau khi gửi thành công
        setFileDate("");
        setIssueDate("");
        setEmpName("");
        setDonVi("");
        setEmpEmail("");
        setTelecomData({});
        setItData({});
      } else {
        alert("Lỗi khi gửi dữ liệu: " + (result?.msg || "Có lỗi xảy ra"));
      }
    } catch (error) {
      console.error("Lỗi khi gửi dữ liệu:", error);
      alert("Đã xảy ra lỗi khi gửi dữ liệu.");
    }
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Form Điền Thông Tin" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-3">
              <h3 className="font-semibold text-dark dark:text-white">
                Form Điền Thông Tin
              </h3>
            </div>
            <form action="#" onSubmit={handleSubmit}>
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-4.5">
                  <DatePickerOne
                    onFileDateChange={setFileDate}
                    onIssueDateChange={setIssueDate}
                  />
                </div>
                <div className="mb-4.5 flex flex-col gap-4.5">
                  <InputGroup
                    label="Họ Tên"
                    type="text"
                    placeholder="Họ và tên"
                    customClasses="w-full xl:w-2/2"
                    required
                    value={empName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setEmpName(e.target.value)
                    }
                  />
                  <InputGroup
                    label="Đơn vị"
                    type="text"
                    placeholder="Đơn vị bạn đang công tác"
                    customClasses="w-full xl:w-2/2"
                    required
                    value={donVi}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setDonVi(e.target.value)
                    }
                  />
                </div>
                <InputGroup
                  label="Email"
                  type="email"
                  placeholder="Email của bạn"
                  customClasses="mb-4.5"
                  required
                  value={empEmail}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmpEmail(e.target.value)
                  }
                />

                <SelectGroupOne onChange={handleCategoryChange} />

                {/* Render fields conditionally based on category */}
                {category === "Telecom" && (
                  <SelectGroupTelecom onDataChange={handleTelecomDataChange} />
                )}
                {category === "IT_Solution" && (
                  <SelectGroupIT onDataChange={handleITDataChange} />
                )}
                <button
                  className="flex w-full justify-center rounded-[7px] bg-primary p-[13px] font-medium text-white hover:bg-opacity-90"
                  type="submit"
                >
                  Gửi
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default FormLayout;
