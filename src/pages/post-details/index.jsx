import { useNavigate, useParams } from "react-router-dom";
import OutletHeader from "../../components/OutletHeader";
import { numberFormat } from "../../utils/format";
import classNames from "classnames";
import { useEffect, useState } from "react";
import {
  BookmarkIcon,
  CommentIcon,
  FillBookmarkIcon,
  FillHeartIcon,
  HeartIcon,
  ShareIcon,
} from "../../icons";

export default function PostDetail(post) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [likePost, setLikePost] = useState(null);

  useEffect(() => {}, [setLikePost]);

  const controlLikePost = (post) => {
    const updatedPost = { ...post };
    updatedPost.stats.like = likePost
      ? post.stats.like - 1
      : post.stats.like + 1;
    setLikePost(!likePost);
  };
  console.log(id);
  return (
    <div className="w-full flex flex-col">
      <OutletHeader title="Gönderi" returnButton={true} />
      <div className="w-full flex flex-col items-start justify-start p-3">
        <header className="w-full flex items-center justify-start gap-x-3">
          <div className="w-10 h-10 rounded-full bg-zinc-300"></div>
          <div className="leading-5 flex items-center gap-2">
            <button
              onClick={(e) => {
                navigate(`/profile/${post?.account?.fullName}`);
                e.stopPropagation();
                e.preventDefault();
              }}
              className="hover:underline flex items-center font-bold"
            >
              Post Detail
              {post?.account?.verified && (
                <svg
                  className="text-[#1d9bf0] ml-0.5 size-6 "
                  viewBox="0 0 22 22"
                >
                  <path
                    fill="currentColor"
                    d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </header>

        {/* Content */}
        <div className="w-full flex flex-col items-start justify-start mt-3 gap-y-3">
          <p className="text-left ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
            debitis aliquam in consequatur eius tempore quisquam laborum, iusto
            temporibus fugiat sapiente adipisci maiores molestiae harum quas
            suscipit vero beatae dolorem.
          </p>
          <div className="w-full">
            <img
              src={"https://placehold.co/512x290"}
              alt=""
              className="w-full border max-h-[510px] object-cover border-[color:var(--background-third)] rounded-2xl"
            />
          </div>
          <div className="flex items-center justify-start text-[15px] gap-x-1 text-[#536471] px-2 ">
            <span>ÖS 6:58 · 13 Oca 2025</span>
            <div>·</div>
            <div className="flex items-center justify-start gap-x-1">
              <div className="font-semibold text-[#0f1419]">
                {numberFormat(534000)}
              </div>
              <span className="">Görüntülenme</span>
            </div>
          </div>
          <div className="w-full border-y border-y-[#eff3f4] flex items-center justify-between p-1">
            <div className="flex items-center justify-start gap-x-4">
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
                    "size-10 transition-colors flex items-center justify-center text-[color:var(--color-base-secondary)] group-hover:bg-[#f918801a] rounded-full group-hover:text-[#f91880]"
                  )}
                >
                  {likePost ? <FillHeartIcon /> : <HeartIcon />}
                </div>
                <span
                  className={classNames(
                    "text-[1rem] transition-colors text-[color:var(--color-base-secondary)] group-hover:text-[#f91880]",
                    {
                      "!text-[#f91880]": likePost === true,
                    }
                  )}
                >
                  {numberFormat(post?.stats?.like || 30)}
                </span>
              </button>

              {/* Comment Icon */}
              <button
                // onClick={() => controlReplyThePost(post)}
                className=" group flex items-center gap-px hover:cursor-pointer"
              >
                <div className="size-10 transition-colors flex items-center justify-center text-[color:var(--color-base-secondary)] group-hover:bg-[#1d9bf01a] rounded-full group-hover:text-[#1d9bf0]">
                  <CommentIcon />
                </div>
                <span className="text-[1rem] transition-colors text-[color:var(--color-base-secondary)] group-hover:text-[#1d9bf0]">
                  {numberFormat(post?.stats?.comments || 30)}
                </span>
              </button>

              {/* Bookmark Post Icon */}
              <button
                // onClick={() => controlReplyThePost(post)}
                className=" group flex items-center gap-px hover:cursor-pointer"
              >
                <div className="size-10 transition-colors flex items-center justify-center text-[color:var(--color-base-secondary)] group-hover:bg-[#1d9bf01a] rounded-full group-hover:text-[#1d9bf0]">
                  {post?.stats?.bookmark ? (
                    <FillBookmarkIcon />
                  ) : (
                    <BookmarkIcon />
                  )}
                </div>
                <span className="text-[1rem] transition-colors text-[color:var(--color-base-secondary)] group-hover:text-[#1d9bf0]">
                  {numberFormat(post?.stats?.bookmark || 30)}
                </span>
              </button>
            </div>

            {/* Share Post Icon */}
            <div className="size-10 transition-colors flex items-center justify-center text-[color:var(--color-base-secondary)] hover:bg-[#1d9bf01a] rounded-full hover:text-[#1d9bf0] hover:cursor-pointer">
              <ShareIcon />
            </div>
          </div>
        </div>

        {/* <div
          className="flex items-start justify-start text-left"
          dangerouslySetInnerHTML={{
            __html: post?.content?.replace(/\n/g, "<br>"),
          }}
        />
        {post?.type === "photo" && <Photo photos={post.photos} />}
        {post?.type === "poll" && <Poll poll={post.poll} />} */}
      </div>
    </div>
  );
}
