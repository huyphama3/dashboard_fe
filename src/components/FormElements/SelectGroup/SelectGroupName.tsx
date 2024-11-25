"use client";
import React from "react";

interface SelectGroupProps {
  label: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectGroupName: React.FC<SelectGroupProps> = ({
  label,
  options,
  value,
  onChange,
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <select
        className="relative z-20 mb-4 w-full appearance-none rounded-[7px] border border-stroke bg-transparent px-5.5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-dark-3 dark:bg-dark-2 dark:focus:border-primary"
        value={value}
        onChange={onChange}
      >
        <option value="">Chọn...</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectGroupName;
