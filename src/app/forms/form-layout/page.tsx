"use client";
import React, { useState } from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import SelectGroupOne from "@/components/FormElements/SelectGroup/SelectGroupOne";
import InputGroup from "@/components/FormElements/InputGroup";
import DatePickerOne from "@/components/FormElements/DatePicker/DatePickerOne";
import SelectGroupTelecom from "@/components/FormElements/SelectGroup/SelectGroupTelecom";
import SelectGroupIT from "@/components/FormElements/SelectGroup/SelectGroupITSolution";

const FormLayout = () => {
  const [category, setCategory] = useState<string>("");

  const handleCategoryChange = (value: string) => {
    setCategory(value);
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
            <form action="#">
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-4.5">
                  <DatePickerOne />
                </div>
                <div className="mb-4.5 flex flex-col gap-4.5">
                  <InputGroup
                    label="Họ Tên"
                    type="text"
                    placeholder="Họ và tên"
                    customClasses="w-full xl:w-2/2"
                    required
                  />
                  <InputGroup
                    label="Đơn vị"
                    type="text"
                    placeholder="Đơn vị bạn đang công tác"
                    customClasses="w-full xl:w-2/2"
                    required
                  />
                </div>
                <InputGroup
                  label="Email"
                  type="email"
                  placeholder="Email của bạn"
                  customClasses="mb-4.5"
                  required
                />

                <SelectGroupOne onChange={handleCategoryChange} />

                {/* Render fields conditionally based on category */}
                {category === "Telecom" && <SelectGroupTelecom />}
                {category === "IT_Solution" && <SelectGroupIT />}
                <button className="flex w-full justify-center rounded-[7px] bg-primary p-[13px] font-medium text-white hover:bg-opacity-90">
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
