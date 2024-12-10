import classnames from "classnames";
import PropTypes from "prop-types";
import { PacmanLoader } from "react-spinners";

function CustomButton({ label, className, isLoading, ...props }) {
  return (
    <button
      className={classnames(
        "w-full h-[35px] rounded-md  bg-[#e7e9ea] flex items-center justify-center hover:bg-white text-black font-semibold",
        {
          "!bg-[#1d9bf0] !text-[#e7e9ea] hover:!bg-[#1a8cd8]":
            className === "primary",
          "!bg-transparent !text-[#1d9bf0]  border border-[#536471] hover:!bg-[#1d9bf01a]":
            className === "secondary",
        }
      )}
      disabled={isLoading} // Butonu, yükleme sırasında devre dışı bırakıyoruz
      {...props}
    >
      {isLoading ? (
        <PacmanLoader
          //pulseloader
          color="#fff"
          loading={isLoading}
          size={13}
          margin={4}
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
