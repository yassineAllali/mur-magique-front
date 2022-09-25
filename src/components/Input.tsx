import { useState } from "react";

type Props = {
  value: string;
  onChange: (value: string) => void;
  Icon?: React.ReactElement;
  placeholder?: string;
  isPassword?: boolean;
};

const Input = ({ value, onChange, placeholder, isPassword, Icon }: Props) => {
  const [isTextVisible, setTextVisible] = useState(!isPassword);

  return (
    <div className="w-full flex items-center bg-gray-100 h-14 rounded-lg">
      <div className="w-10 h-10 flex items-center justify-center">{Icon}</div>
      <input
        type={isTextVisible ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 bg-transparent outline-none"
      />
      {isPassword && (
        <div
          onClick={() => setTextVisible((isTextVisible) => !isTextVisible)}
          className="w-10 h-10 cursor-pointer flex items-center justify-center"
        ></div>
      )}
    </div>
  );
};

export default Input;
