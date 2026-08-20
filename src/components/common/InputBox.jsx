import React from "react";

const InputBox = ({ placeholder, onChange }) => {
  return (
    <input
      onChange={onChange}
      type="text"
      placeholder={placeholder}
      className="w-full p-2 border border-[#00000063] rounded-md focus:outline-black"
    />
  );
};

export default InputBox;
