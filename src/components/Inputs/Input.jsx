/* eslint-disable react/prop-types */
import { useField } from "formik";
import { useState } from "react";
import { CloseEyeIcon, EyeIcon } from "../../constant/icons";


function CustomInput({ type, isRequired, label, name, ...props }) {
  const [field, meta] = useField(name); // useField ile Formik'ten field ve meta alınır
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col relative ">
      {label && (
        <label htmlFor={name} className="font-semibold text-[15px] mb-2">
          {label}
          {isRequired && " *"}
        </label>
      )}
      <div className="relative">
        <input
          {...field}
          {...props}
          id={name}
          type={type !== "password" ? type : showPassword ? "text" : "password"}
          className={`w-full outline-none border placeholder:text-sm ${
            meta.touched && meta.error ? "border-red-500" : "border-white"
          } bg-[#e7e9ea] text-black px-2 py-1.5 rounded-md`}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 "
          >
            {showPassword ? <EyeIcon /> : <CloseEyeIcon />}
          </button>
        )}
      </div>
      <div className="h-2">
        {meta.touched && meta.error && (
          <div className="text-red-500 text-xs mt-1">{meta.error}</div>
        )}
      </div>
    </div>
  );
}

export default CustomInput;
