import classnames from "classnames";
import PropTypes from "prop-types";

function Button({ label, type, ...props }) {
  return (
    <button
      className={classnames(
        "w-full rounded-sm py-1.5 bg-[#e7e9ea] hover:bg-white text-black font-semibold",
        {
          "": type === 1,
          "bg-[#a1a1a1] text-white": type === 2,
        }
      )}
      {...props}
    >
      {label}
    </button>
  );
}

// Prop validation
Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf([1, 2, 3]),
};

export default Button;
