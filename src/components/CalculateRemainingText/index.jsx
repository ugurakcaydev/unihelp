import classNames from "classnames";

function CalculateRemainingText({ remaining, textLength }) {
  return (
    <div
      className={classNames(
        "relative w-6 h-6 rounded-full border-2 border-[color:var(--background-third)] flex items-center justify-center transition-all duration-500 ",
        {
          "w-9 h-9 ": remaining <= 20,
          " ": remaining <= 10,
        }
      )}
    >
      <div
        className={classNames(
          "radial-progress w-full h-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-sm after:!hidden flex items-center justify-center transition-all duration-500"
        )}
        style={{
          "--value": textLength / 2,
          "--thickness": "1.5px",
          color:
            remaining <= 10
              ? "#ef4444" // Red-500
              : remaining <= 20
              ? "#f59e0b" // Yellow-500
              : "var(--color-primary)", // Varsayılan renk
        }}
      >
        {remaining <= 20 && (
          <div
            className={classNames("text-[color:var(--color-primary)]", {
              "text-yellow-500": remaining <= 20,
              "!text-red-500": remaining <= 10,
            })}
          >
            {remaining}
          </div>
        )}
      </div>
    </div>
  );
}

export default CalculateRemainingText;
