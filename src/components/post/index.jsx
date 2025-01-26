import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Poll from "./poll";
import Photo from "./photo";
import GetBottomIcons from "./bottomIcons";
import { calculateTime, routeFormat } from "../../utils/format";
import { VerifiedIcon } from "../../icons";

export default function Post({ post }) {
  const [likePost, setLikePost] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {}, [setLikePost]);
  console.log(post, "post");
  const controlLikePost = (post) => {
    const updatedPost = { ...post };
    updatedPost.stats.like = likePost
      ? post.stats.like - 1
      : post.stats.like + 1;
    setLikePost(!likePost);
  };
  return (
    <Link
      to={`/${routeFormat(post.account.fullName)}/status/${post.id}`}
      className=" flex relative p-3 gap-3 border-b border-[color:var(--background-third)]  before:absolute before:z-[-1] before:transition-colors before:opacity-50 before:inset-0 before:hover:bg-[color:var(--background-secondary)]"
    >
      <div className="w-10 h-10 rounded-full">
        <button
          onClick={(e) => {
            navigate(`/${routeFormat(post.account.fullName)}`);
            e.stopPropagation();
            e.preventDefault();
          }}
        >
          <img
            src={post.account.avatar || "https://placehold.co/40x40"}
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
                navigate(`/${routeFormat(post.account.fullName)}`);
                e.stopPropagation();
                e.preventDefault();
              }}
              className="hover:underline flex items-center font-bold"
            >
              {post.account.fullName}
              {post.account?.verified && <VerifiedIcon />}
            </button>
            <div className="text-[color:var(--color-base-secondary)] flex items-center gap-1.5">
              <div className="size-[3px] rounded-full bg-[color:var(--color-base-secondary)]" />
              <div className="text-[#afaeae]">
                {calculateTime(post.createdAt)}
              </div>
            </div>
          </div>
        </header>
        <div>
          {/* Content */}
          <div
            className="flex items-start justify-start text-left"
            dangerouslySetInnerHTML={{
              __html: post.content.replace(/\n/g, "<br>"),
            }}
          />
          {!post.poll && <Photo photos={post.photos} />}
          {post.poll && <Poll poll={post.poll} />}

          <div className="flex items-center justify-between -ml-1.5 mt-1.5">
            <div className="flex items-center justify-start gap-x-2">
              {/* Like Post Icon */}
              <GetBottomIcons
                name={"like"}
                quantity={post.likesCount}
                isActive={post.isLiked}
                onClick={() => {
                  controlLikePost(post);
                }} 
              />
              {/* Comment Post Icon */}
              <GetBottomIcons
                name={"comment"}
                quantity={post.stats.comments}
                onClick={() => {}}
              />
           
            </div>
            <div className="flex items-center justify-end gap-x-1">
              {/* Share Post Icon */}
              <GetBottomIcons name={"share"} onClick={() => {}} />
              {/* Bookmark Post Icon */}
              <GetBottomIcons
                name={"bookmark"}
                onClick={() => {}}
                isActive={post.isBookmarked}
              />
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
