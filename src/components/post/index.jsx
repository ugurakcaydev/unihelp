import classNames from "classnames";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import StatsModal from "~/modals/stats";

import { numberFormat } from "../../utils/format";
import Poll from "./poll";
import Photo from "./photo";

export default function Post({ post }) {
  // const [photos, setPhotos] = useState([]);

  // useEffect(() => {
  //   if (post.photos) {
  //     setTimeout(() => {
  //       setPhotos(post.photos);
  //     }, 1000);
  //   }
  // }, [post.photos]);

  const [likePost, setLikePost] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {}, [setLikePost]);

  // const controlReplyThePost = (post) => {
  //   setModal("replyThePost", post);
  // };

  const controlLikePost = (post) => {
    const updatedPost = { ...post };
    updatedPost.stats.like = likePost
      ? post.stats.like - 1
      : post.stats.like + 1;
    setLikePost(!likePost);
  };

  return (
    <Link
      to={`/${post.account.fullName
        .toLocaleLowerCase("TR-tr")
        .trim()
        .replace(/ /g, "-")}/status/${post.id}`}
      className=" flex relative px-4 py-3 gap-3 border-b border-[color:var(--background-third)]  before:absolute before:z-[-1] before:transition-colors before:opacity-50 before:inset-0 before:hover:bg-[color:var(--background-secondary)]"
    >
      <div className="w-10 h-10 rounded-full">
        <button
          onClick={(e) => {
            navigate(`/profile/${post.account.fullName}`);
            e.stopPropagation();
            e.preventDefault();
          }}
        >
          <img
            src={post.account.avatar}
            className="w-10 h-10 rounded-full object-cover "
            alt=""
          />
        </button>
      </div>
      <div className="flex-1">
        <header className=" mb-0.5 relative flex items-center justify-between">
          <div className="leading-5 flex items-center gap-2">
            <button
              onClick={(e) => {
                navigate(`/profile/${post.account.fullName}`);
                e.stopPropagation();
                e.preventDefault();
              }}
              className="hover:underline flex items-center font-bold"
            >
              {post.account.fullName}
              {post.account?.verified && (
                <svg
                  className="text-[#1d9bf0] ml-0.5 size-5 "
                  viewBox="0 0 22 22"
                >
                  <path
                    fill="currentColor"
                    d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
                  ></path>
                </svg>
              )}
            </button>
            <div className="text-[color:var(--color-base-secondary)] flex items-center gap-1.5">
              <div className="w-0.5 h-0.5 rounded-full bg-[color:var(--color-base-secondary)]" />
              <div>17s</div>
            </div>
          </div>
        </header>
        <div>
          <div
            className="flex items-start justify-start text-left"
            dangerouslySetInnerHTML={{
              __html: post.content.replace(/\n/g, "<br>"),
            }}
          />
          {post.type === "photo" && <Photo photos={post.photos} />}
          {post.type === "poll" && <Poll poll={post.poll} />}
          {/* {post.photos && (
            <div
              className={classNames(
                "mt-3 border-2 max-w-full max-h-[510px] h-auto border-[#2f3336] gap-1 rounded-xl grid grid-cols-1 grid-rows-1 overflow-hidden",
                {
                  "!grid !grid-cols-2 !grid-rows-2 !max-h-[288px]":
                    photos.length > 1,
                }
              )}
            >
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className={classNames(
                    "object-cover rounded-xl w-full h-full  ",
                    {}
                  )}
                >
                  <img
                    src={photo}
                    className="object-cover w-full h-full cursor-pointer "
                    alt=""
                  />
                </div>
              ))}
            </div>
          )} */}
          <div className="flex items-center justify-between -ml-1.5 mt-1.5">
            <div className="flex items-center justify-start gap-x-3">
              {/* Like Post Icon */}
              <button
                onClick={(e) => {
                  controlLikePost(post);
                  e.stopPropagation();
                  e.preventDefault();
                }}
                className={classNames(
                  " group flex items-center gap-px hover:cursor-pointer",
                  {}
                )}
              >
                <div
                  className={classNames(
                    "size-10 transition-colors flex items-center justify-center text-[color:var(--color-base-secondary)] group-hover:bg-[#f918801a] rounded-full group-hover:text-[#f91880]",
                    {
                      "!text-[#f91880]": likePost === true,
                    }
                  )}
                >
                  {likePost ? (
                    <svg viewBox="0 0 24 24" className="size-5">
                      <g>
                        <path
                          fill="currentColor"
                          d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"
                        ></path>
                      </g>
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" className="size-5">
                      <path
                        fill="currentColor"
                        d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"
                      />
                    </svg>
                  )}
                </div>
                <span
                  className={classNames(
                    "text-[0.813rem] transition-colors text-[color:var(--color-base-secondary)] group-hover:text-[#f91880]",
                    {
                      "!text-[#f91880]": likePost === true,
                    }
                  )}
                >
                  {numberFormat(post.stats.like)}
                </span>
              </button>
              {/* Comment Post Icon */}
              <button
                // onClick={() => controlReplyThePost(post)}
                className=" group flex items-center gap-px hover:cursor-pointer"
              >
                <div className="size-10 transition-colors flex items-center justify-center text-[color:var(--color-base-secondary)] group-hover:bg-[#1d9bf01a] rounded-full group-hover:text-[#1d9bf0]">
                  <svg viewBox="0 0 24 24" className="size-5">
                    <path
                      fill="currentColor"
                      d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"
                    />
                  </svg>
                </div>
                <span className="text-[0.813rem] transition-colors text-[color:var(--color-base-secondary)] group-hover:text-[#1d9bf0]">
                  {numberFormat(post.stats.comments)}
                </span>
              </button>
            </div>
            <div className="flex items-center justify-end gap-x-2">
              {/* Share Post Icon */}
              <div className="size-9 transition-colors flex items-center justify-center text-[color:var(--color-base-secondary)] hover:bg-[#1d9bf01a] rounded-full hover:text-[#1d9bf0] hover:cursor-pointer">
                <svg viewBox="0 0 24 24" className="size-[18px]">
                  <path
                    fill="currentColor"
                    d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"
                  />
                </svg>
              </div>

              {/* Bookmark Post Icon */}
              <div className="size-9 transition-colors flex items-center justify-center text-[color:var(--color-base-secondary)] hover:bg-[#1d9bf01a] rounded-full hover:text-[#1d9bf0] hover:cursor-pointer">
                {post.stats.bookmark ? (
                  <svg
                    viewBox="0 0 24 24"
                    className="block size-[18px] text-[#1d9bf0]"
                  >
                    <path
                      fill="currentColor"
                      d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5z"
                    />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" className="block size-[18px]">
                    <path
                      fill="currentColor"
                      d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"
                    />
                  </svg>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

Post.propTypes = {
  post: PropTypes.object,
};
