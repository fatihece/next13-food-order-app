import React from "react";

const Input = () => {
  return (
    <div className="w-full">
      <label className="relative block w-full cursor-text">
        <input
          type="text"
          className="peer h-14 w-full border border-primary px-4 pt-2 outline-none"
          required
        />
        <span className="absolute left-0 top-0 flex h-full items-center px-4 text-sm transition-all peer-valid:h-7 peer-valid:text-xs peer-focus:h-7 peer-focus:text-xs">
          Email
        </span>
      </label>
    </div>
  );
};

export default Input;
