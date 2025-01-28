import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Poll from "./poll";
import Photo from "./photo";
import GetBottomIcons from "./bottomIcons";
import { calculateTime, routeFormat } from "../../utils/format";
import { VerifiedIcon } from "../../icons";

export default function Post({ post }) {
  const navigate = useNavigate();

  return (
    <div className="flex relative p-3 gap-3 border-b border-[color:var(--background-third)] before:absolute before:z-[-1] before:transition-colors before:opacity-50 before:inset-0 before:hover:bg-[color:var(--background-secondary)]">
      <div className="w-10 h-10 rounded-full">
        <button
          onClick={(e) => {
            navigate(`/${routeFormat(post?.account?.username)}`, {
              state: { userId: "2" },
            });
            e.stopPropagation();
            e.preventDefault();
          }}
        >
          <img
            src={post.account.avatar || "https://placehold.co/40x40"}
            className="w-10 h-10 rounded-full object-cover"
            alt=""
          />
        </button>
      </div>
      <div className="flex-1 ">
        <header className="mb-1 relative flex items-center justify-between pl-1 ">
          <div className="leading-5 flex items-center gap-2">
            <button
              onClick={() => {
                navigate(`/${routeFormat(post?.account?.username)}`);
              }}
              className="hover:underline flex items-center font-bold"
            >
              {post?.account?.username}
              {post?.account?.verified && <VerifiedIcon />}
            </button>
            <div className="text-[color:var(--color-base-secondary)] flex items-center gap-1.5">
              <div className="size-[3px] rounded-full bg-[color:var(--color-base-secondary)]" />
              <div className="text-[#afaeae]">
                {calculateTime(post.createdAt)}
              </div>
              {`#${post.id}`}
            </div>
          </div>
        </header>
        <div className="flex flex-col gap-y-2">
          {/* Content */}
          <div
            onClick={() => {
              navigate(
                `/${routeFormat(post?.account?.username)}/status/${post.id}`
              );
            }}
            className="flex items-start justify-start text-left pl-1"
            dangerouslySetInnerHTML={{
              __html: post.content.replace(/\n/g, "<br>"),
            }}
          />
          {!post.poll && <Photo photos={post.photos} />}
          {post.poll && <Poll poll={post.poll} />}

          <div className="flex items-center justify-between -ml-1.5 mt-1.5">
            <div className="flex items-center justify-start gap-x-1">
              {/* Like Post Icon */}
              <GetBottomIcons name="like" post={post} />
              {/* Comment Post Icon */}
              <GetBottomIcons name="comment" post={post} />
            </div>
            <div className="flex items-center justify-end gap-x-1">
              {/* Share Post Icon */}
              <GetBottomIcons name="share" />
              {/* Bookmark Post Icon */}
              <GetBottomIcons
                name="bookmark"
                post={post}
                showQuantity={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.object,
};
