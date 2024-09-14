import React, { ChangeEvent } from "react";

interface TextAreaProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
  cols?: number;
}

const TextArea: React.FC<TextAreaProps> = ({
  value,
  onChange,
  placeholder,
  rows = 4,
  cols = 50,
}) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      cols={cols}
      className="block w-full px-4 py-2 border border-gray-300 rounded-[0.8rem] shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
    />
  );
};

export default TextArea;
