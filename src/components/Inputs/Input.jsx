import { useField } from "formik";
import { useState } from "react";
import { CloseEyeIcon, EyeIcon } from "../../constant/icons";
import classNames from "classnames";

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
          autoComplete="off"
          type={type !== "password" ? type : showPassword ? "text" : "password"}
          className={classNames(
            `w-full outline-none border border-[#e5e7e7] placeholder:text-sm bg-[#f5f6f7] text-black px-3 py-1.5 rounded-md`,
            {
              "border-red-500": meta.touched && meta.error,
            }
          )}
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
