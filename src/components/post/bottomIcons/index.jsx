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
import { useLikePost } from "../../../hooks/interactions/likePost";
import { useBookmarksPost } from "../../../hooks/interactions/bookmarkPost";
import { useState } from "react";

function GetBottomIcons({ name, post, showQuantity = true }) {
  const { mutate: likePosts } = useLikePost();
  const { mutate: bookmarkPosts } = useBookmarksPost();
  const [isLiked, setIsLiked] = useState(post?.isLiked);
  const [likeCount, setLikeCount] = useState(post?.stats?.likes);
  const [isBookmarked, setIsBookmarked] = useState(post?.isBookmarked);
  const [bookmarkCount, setBookmarkCount] = useState(post?.stats?.bookmarks);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount((prev) => prev - 1);
      likePosts({ postId: post.id, type: "dislike" });
    } else {
      setLikeCount((prev) => prev + 1);
      likePosts({ postId: post.id, type: "like" });
    }
    setIsLiked((prev) => !prev);
  };

 

  const handleBookmark = () => {
    if (isBookmarked) {
      bookmarkPosts({ postId: post.id, type: "unbookmark" });
      setBookmarkCount((prev) => prev - 1);
    } else {
      bookmarkPosts({ postId: post.id, type: "bookmark" });
      setBookmarkCount((prev) => prev + 1);
    }
    setIsBookmarked((prev) => !prev);
  };

  switch (name) {
    case "like":
      return (
        <button
          onClick={(e) => {
            handleLike();
            e.preventDefault();
            e.stopPropagation();
          }}
          className="group flex items-center gap-px hover:cursor-pointer"
        >
          <div
            className={classNames(
              "size-10 transition-colors flex items-center justify-center text-[color:var(--color-base-secondary)] group-hover:bg-[#f918801a] rounded-full group-hover:text-[#f91880]"
            )}
          >
            {isLiked ? <FillHeartIcon /> : <HeartIcon />}
          </div>
          {showQuantity && (
            <span
              className={classNames(
                "text-[0.9rem] transition-colors text-[color:var(--color-base-secondary)] group-hover:text-[#f91880]"
              )}
            >
              {numberFormat(likeCount)}
            </span>
          )}
        </button>
      );
    case "comment":
      return (
        <button className="group flex items-center gap-px hover:cursor-pointer">
          <div className="size-10 transition-colors flex items-center justify-center text-[color:var(--color-base-secondary)] group-hover:bg-[#1d9bf01a] rounded-full group-hover:text-[#1d9bf0]">
            <CommentIcon />
          </div>
          {showQuantity && (
            <span className="text-[0.9rem] transition-colors text-[color:var(--color-base-secondary)] group-hover:text-[#1d9bf0]">
              {numberFormat(post?.stats?.comments)}
            </span>
          )}
        </button>
      );
    case "bookmark":
      return (
        <button
          onClick={(e) => {
            handleBookmark();
            e.preventDefault();
            e.stopPropagation();
          }}
          className="group flex items-center gap-px hover:cursor-pointer"
        >
          <div className="size-10 transition-colors flex items-center justify-center text-[color:var(--color-base-secondary)] group-hover:bg-[#1d9bf01a] rounded-full group-hover:text-[#1d9bf0]">
            {isBookmarked ? <FillBookmarkIcon /> : <BookmarkIcon />}
          </div>
          {showQuantity && (
            <span className="text-[0.9rem] transition-colors text-[color:var(--color-base-secondary)] group-hover:text-[#1d9bf0]">
              {numberFormat(bookmarkCount)}
            </span>
          )}
        </button>
      );
    case "share":
      return (
        <button className="size-10 transition-colors flex items-center justify-center text-[color:var(--color-base-secondary)] hover:bg-[#1d9bf01a] rounded-full hover:text-[#1d9bf0] hover:cursor-pointer">
          <ShareIcon />
        </button>
      );
    default:
      return null;
  }
}

export default GetBottomIcons;
