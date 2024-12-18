import classNames from "classnames";
import PropTypes from "prop-types";

function TextInputBottom({ textLength, setPoll }) {
  let kalan = 200 - textLength;
  return (
    <div className="w-full my-3 -ml-1.5 flex items-center justify-between">
      <div className="flex gap-x-.5 items-center">
        <div className=" group flex items-center  hover:cursor-pointer">
          <div className="w-[2.172rem] h-[2.172rem] transition-colors flex items-center justify-center text-[color:var(--color-base-secondary)] group-hover:bg-[#1d9bf01a] rounded-full group-hover:text-[#1d9bf0]">
            <svg
              className="h-[1.25rem] text-[color:var(--color-primary)] "
              viewBox="0 0 24 24"
            >
              <g>
                <path
                  fill="currentColor"
                  d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z"
                ></path>
              </g>
            </svg>
          </div>
        </div>

        <button
          onClick={() => setPoll(true)}
          className=" group flex items-center  hover:cursor-pointer "
        >
          <div className="w-[2.172rem] h-[2.172rem] transition-colors flex items-center justify-center text-[color:var(--color-base-secondary)] group-hover:bg-[#1d9bf01a] rounded-full group-hover:text-[#1d9bf0]">
            <svg
              className="h-[1.25rem] text-[color:var(--color-primary)]"
              viewBox="0 0 24 24"
            >
              <g>
                <path
                  fill="currentColor"
                  d="M6 5c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zM2 7c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12V6h10v2zM6 15c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zm-4 2c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12v-2h10v2zM7 7c0 .552-.45 1-1 1s-1-.448-1-1 .45-1 1-1 1 .448 1 1z"
                ></path>
              </g>
            </svg>
          </div>
        </button>
      </div>
      <div className="flex items-center gap-x-3">
        {textLength > 0 && (
          <div className={"flex items-center gap-x-3"}>
            <div
              className={classNames(
                "relative w-6 h-6 rounded-full border-2 border-[color:var(--background-third)] flex items-center justify-center transition-all duration-500 ",
                {
                  "w-9 h-9 ": kalan <= 20,
                  " ": kalan <= 10,
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
                    kalan <= 10
                      ? "#ef4444" // Red-500
                      : kalan <= 20
                      ? "#f59e0b" // Yellow-500
                      : "var(--color-primary)", // Varsayılan renk
                }}
              >
                {kalan <= 20 && (
                  <div
                    className={classNames("text-[color:var(--color-primary)]", {
                      "text-yellow-500": kalan <= 20,
                      "!text-red-500": kalan <= 10,
                    })}
                  >
                    {kalan}
                  </div>
                )}
              </div>
            </div>

            <div className="w-[1px] h-[31px] border-1 bg-[color:var(--background-third)]"></div>
            <div className="w-6 h-6 rounded-full border-2 flex items-center justify-center border-[color:var(--background-third)]">
              <svg
                viewBox="0 0 24 24 "
                className="h-[1rem] text-[color:var(--color-primary)]"
              >
                <g>
                  <path
                    fill="currentColor"
                    d="M11 11V4h2v7h7v2h-7v7h-2v-7H4v-2h7z"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
        )}
        <button
          className={classNames(
            " bg-[color:var(--color-base)] px-5 py-1.5 rounded-full text-white pointer-events-auto cursor-pointer",
            {
              "bg-black/50 !cursor-not-allowed opacity-50 !pointer-events-none":
                textLength === 0,
            }
          )}
        >
          Gönder
        </button>
      </div>
    </div>
  );
}

TextInputBottom.propTypes = {
  textLength: PropTypes.number,
};

export default TextInputBottom;
