export interface InputGroupProps {
    label: string;
    type: string;
    placeholder: string;
    customClasses?: string;
    required?: boolean;
    value: string; // Thêm thuộc tính value
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }

