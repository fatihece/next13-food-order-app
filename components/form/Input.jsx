import React from "react";

const Input = (props) => {
  const { type, placeholder, ...inputProps } = props;
  return (
    <div className="w-full">
      <label className="relative block w-full cursor-text">
        <input
          type={type}
          className={`peer h-14 w-full border border-primary px-4 outline-none ${
            type !== "datetime-local" && "pt-2"
          }`}
          required
          {...inputProps}
        />
        {type !== "datetime-local" && (
          <span className="absolute left-0 top-0 flex h-full items-center px-4 text-sm transition-all peer-valid:h-7 peer-valid:text-xs peer-focus:h-7 peer-focus:text-xs">
            {placeholder}
          </span>
        )}
      </label>
    </div>
  );
};

export default Input;
