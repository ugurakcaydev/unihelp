import classNames from "classnames";
import { useAccount } from "../../../../store/auth/hooks";
import { useRef, useState } from "react";
import CalculateRemainingText from "../../../../components/CalculateRemainingText";
import useCommentOnPost from "../../../../hooks/useCommentOnPost";
import Loader from "../../../../components/loader";

function CommentPostDetail({ post_id, setCommentAdd }) {
  const currentAccount = useAccount();
  const [text, setText] = useState("");
  const [active, setActive] = useState(false);
  const textareaRef = useRef();

  const resetForm = () => {
    setText("");
    setActive(false);
  };

  const { mutate: commentOnPost, isLoading } = useCommentOnPost({
    onSuccess: (data) => {
      setCommentAdd(data.data);
      resetForm();
    },
    onMutate: (data) => {
      console.log("onMutate", data);
    },
  });

  const checkTextLength = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  const maxTextLength = 200;
  const remaining = maxTextLength - text.length;

  return (
    <div className="w-full border-b border-[color:var(--background-third)]">
      <div className="px-3 flex ">
        <div className="mr-3 pt-3">
          <img
            src={currentAccount?.avatar || "https://placehold.co/40x40"}
            className="w-10 h-10 bg-gray-300 rounded-full object-cover"
            alt="avatar"
          />
        </div>
        <div
          className={classNames(
            "flex relative flex-col flex-1 pb-14 justify-start h-[70px] transition-all duration-1000 ease-linear ",
            {
              "h-[125.6px]": active && text.length == 0,
              "!h-fit": text.length > 0,
            }
          )}
        >
          <div className="flex flex-col w-full ">
            <div className="pt-4 h-auto  overflow-hidden w-full text-xl ">
              <textarea
                onClick={() => setActive(true)}
                ref={textareaRef}
                id="auto-expanding-textarea"
                value={text}
                onInput={checkTextLength}
                onChange={(e) => setText(e.target.value)}
                className=" w-full  placeholder:text-[color:var(--color-base-secondary)] overflow-hidden bg-[color:var(--background-primary)] outline-none text-[20px] text-[color:var(--color-base)]   resize-none leading-6"
                placeholder={"Yanıtlayınız..."}
              />
            </div>
          </div>

          {active && text.length > 0 && (
            <div
              className={
                "flex items-center gap-x-3 absolute bottom-3  right-28"
              }
            >
              <CalculateRemainingText
                remaining={remaining}
                textLength={text.length}
              />
            </div>
          )}

          <button
            onClick={() => {
              commentOnPost({ post_id: post_id, comment: text });
            }}
            className={classNames(
              "absolute right-3 bottom-1/2 translate-y-1/2 min-w-[80px] min-h-[36px] w-fit bg-[color:var(--color-base)] px-5 py-1.5 rounded-full text-white duration-[1500ms] ease-in-out transition-all",
              {
                "right-3 bottom-7": active,
                "bg-black/50 cursor-not-allowed opacity-50 ":
                  remaining <= 0 || text.length == 0,
              }
            )}
          >
            {isLoading ? (
              <Loader isLoading={isLoading} color={"#fff"} />
            ) : (
              "Yanıtla"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CommentPostDetail;
