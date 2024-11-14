"use client";
import React, { useState } from "react";

const SelectGroupOne: React.FC<{ onChange: (value: string) => void }> = ({
  onChange,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
    onChange(e.target.value); // Propagate the change to the parent component
  };

  return (
    <div className="mb-4.5">
      <label className="mb-3 block text-body-sm text-dark dark:text-white">
        Mảng Kinh Doanh
      </label>
      <div className="relative z-20 bg-transparent dark:bg-dark-2">
        <select
          value={selectedOption}
          onChange={handleSelectChange}
          className="relative z-20 w-full appearance-none rounded-[7px] border border-stroke bg-transparent px-5.5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-dark-3 dark:bg-dark-2 dark:focus:border-primary"
        >
          <option value="" disabled>
            Chọn Mảng Kinh Doanh
          </option>
          <option value="Telecom">Viễn Thông</option>
          <option value="IT_Solution">Giải Pháp Công Nghệ Thông Tin</option>
        </select>
      </div>
    </div>
  );
};

export default SelectGroupOne;
