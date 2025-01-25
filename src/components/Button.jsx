import classnames from "classnames";
import PropTypes from "prop-types";
import { ClipLoader } from "react-spinners";

function CustomButton({ label, className, isLoading, ...props }) {
  return (
    <button
      className={classnames(
        "w-full h-[35px] rounded-md flex items-center justify-center border  text-black font-semibold",
        {
          "!bg-[#1d9bf0] !text-[#e7e9ea] border-[#fff] hover:!bg-[#1a8cd8]":
            className === "primary",
          "!bg-transparent !text-[#1d9bf0]   border-[#1d9bf0] hover:!bg-[#f9f9f9]":
            className === "secondary",
        }
      )}
      disabled={isLoading} // Butonu, yükleme sırasında devre dışı bırakıyoruz
      {...props}
    >
      {isLoading ? (
        <ClipLoader
          //pulseloader
          color={className === "primary" ? "#e7e9ea" : "#1d9bf0"}
          loading={isLoading}
          size={20}
          speedMultiplier={0.8}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        label
      )}
    </button>
  );
}

// Prop validation
CustomButton.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default CustomButton;
