import classNames from "classnames";
import { useAccount } from "../../../store/auth/hooks";
import { useRef, useState } from "react";
import CalculateRemainingText from "../../../components/CalculateRemainingText";

function CommentPostDetail() {
  const currentAccount = useAccount();
  const [textLength, setTextLength] = useState(0);
  const textareaRef = useRef();
  const [active, setActive] = useState(false);

  const checkTextLength = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
    setTextLength(textarea.value.length);
  };

  const maxTextLength = 200;
  const remaining = maxTextLength - textLength;

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
        <div className="flex relative flex-col flex-1 justify-center ">
          <div className="flex flex-col w-full ">
            <div className="pt-4 h-auto  overflow-hidden w-full text-xl ">
              <textarea
                onClick={() => setActive(true)}
                ref={textareaRef}
                id="auto-expanding-textarea"
                onInput={checkTextLength}
                className=" w-full  placeholder:text-[color:var(--color-base-secondary)] overflow-hidden bg-[color:var(--background-primary)] outline-none text-[20px] text-[color:var(--color-base)]   resize-none leading-6"
                placeholder={"Yanıtlayınız..."}
              />
            </div>
          </div>

          {active && (
            <div className="flex items-center justify-end gap-x-3 mb-3 mt-1 h-10 relative  ">
              {textLength > 0 && (
                <div
                  className={
                    "flex items-center gap-x-3 absolute bottom-0 right-28"
                  }
                >
                  <CalculateRemainingText
                    remaining={remaining}
                    textLength={textLength}
                  />
                </div>
              )}
            </div>
          )}
          <button
            className={classNames(
              "absolute right-3 bottom-1/2 translate-y-1/2 min-w-[80px] min-h-[36px] w-fit bg-[color:var(--color-base)] px-5 py-1.5 rounded-full text-white duration-[1500ms] ease-in-out transition-all",
              {
                "right-3 bottom-7": active,
                "bg-black/50 cursor-not-allowed opacity-50 ":
                  remaining <= 0 || textLength == 0,
              }
            )}
          >
            {/* {isPending ? (
              <Loader isLoading={isPending} color={"#fff"} />
            ) : (
              "Yanıtla"
            )} */}
            Yanıtla
          </button>
        </div>
      </div>
    </div>
  );
}

export default CommentPostDetail;
