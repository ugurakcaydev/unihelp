import classNames from "classnames";
import PropTypes from "prop-types";
import CalculateRemainingText from "../CalculateRemainingText";
import { PhotoIcon } from "../../icons";

function TextInputBottom({ textLength, setType }) {
  const maxTextLength = 200;
  const remaining = maxTextLength - textLength;
  return (
    <div className="w-full my-3 -ml-1.5 flex items-center justify-between">
      <div className="flex gap-x-.5 items-center">

        <button className=" group flex items-center">
          <div className="size-10 transition-colors flex items-center justify-center text-[color:var(--color-base-secondary)] group-hover:bg-[#1d9bf01a] rounded-full group-hover:text-[#1d9bf0]">
            <PhotoIcon className={"text-[color:var(--color-primary)] "} />
          </div>
        </button>

        <button
          onClick={() => setType("poll")}
          className=" group flex items-center "
        >
          <div className="size-10 transition-colors flex items-center justify-center text-[color:var(--color-base-secondary)] group-hover:bg-[#1d9bf01a] rounded-full group-hover:text-[#1d9bf0]">
            <svg
              className="size-5 text-[color:var(--color-primary)]"
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
            <CalculateRemainingText
              remaining={remaining}
              textLength={textLength}
            />
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
                remaining <= 0 || textLength == 0,
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
