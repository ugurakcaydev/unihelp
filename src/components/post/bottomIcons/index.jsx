import { numberFormat } from "../../../utils/format";
import {
  BookmarkIcon,
  CommentIcon,
  FillBookmarkIcon,
  FillHeartIcon,
  HeartIcon,
  ShareIcon,
} from "../../../icons";
import classNames from "classnames";

function GetBottomIcons({ name, quantity, isActive, onClick }) {
  switch (name) {
    case "like":
      return (
        <button
          onClick={(e) => {
            onClick();
            e.preventDefault();
            e.stopPropagation();
          }}
          className=" group flex items-center gap-px hover:cursor-pointer"
        >
          <div
            className={classNames(
              "size-10 transition-colors flex items-center justify-center text-[color:var(--color-base-secondary)] group-hover:bg-[#f918801a] rounded-full group-hover:text-[#f91880]"
            )}
          >
            {isActive ? <FillHeartIcon /> : <HeartIcon />}
          </div>
          <span
            className={classNames(
              "text-[0.9rem] transition-colors text-[color:var(--color-base-secondary)] group-hover:text-[#f91880]",
              {
                "!text-[#f91880]": isActive,
              }
            )}
          >
            {numberFormat(quantity)}
          </span>
        </button>
      );
    case "comment":
      return (
        <button
          onClick={() => {
            onClick();
          }}
          className="group flex items-center gap-px hover:cursor-pointer"
        >
          <div className="size-10 transition-colors flex items-center justify-center text-[color:var(--color-base-secondary)] group-hover:bg-[#1d9bf01a] rounded-full group-hover:text-[#1d9bf0]">
            <CommentIcon />
          </div>
          <span className="text-[0.9rem] transition-colors text-[color:var(--color-base-secondary)] group-hover:text-[#1d9bf0]">
            {numberFormat(quantity)}
          </span>
        </button>
      );
    case "bookmark":
      return (
        <button
          onClick={(e) => {
            onClick();
            e.preventDefault();
            e.stopPropagation();
          }}
          className=" group flex items-center gap-px hover:cursor-pointer"
        >
          <div className="size-10 transition-colors flex items-center justify-center text-[color:var(--color-base-secondary)] group-hover:bg-[#1d9bf01a] rounded-full group-hover:text-[#1d9bf0]">
            {isActive ? <FillBookmarkIcon /> : <BookmarkIcon />}
          </div>
          {quantity && (
            <span className="text-[1rem] transition-colors text-[color:var(--color-base-secondary)] group-hover:text-[#1d9bf0]">
              {numberFormat(quantity)}
            </span>
          )}
        </button>
      );
    case "share":
      return (
        <button
          onClick={(e) => {
            onClick();
            e.preventDefault();
            e.stopPropagation();
          }}
          className="size-10 transition-colors flex items-center justify-center text-[color:var(--color-base-secondary)] hover:bg-[#1d9bf01a] rounded-full hover:text-[#1d9bf0] hover:cursor-pointer"
        >
          <ShareIcon />
        </button>
      );
    default:
  }
}

export default GetBottomIcons;
