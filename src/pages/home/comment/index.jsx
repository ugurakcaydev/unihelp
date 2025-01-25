import { useState, useRef } from "react";
import { useAccount } from "../../../store/auth/hooks";
import TextInputBottom from "../../../components/textInputBottom";
import PollForm from "../../../components/commentPollForm";
import CommentTags from "./tags";
import { Days } from "../../../utils/times";
import useCreatePost from "../../../hooks/useCreatePost";

export default function Comment() {
  const {
    mutate: createPost,
    data,
    isLoading,
    isError,
    isSuccess,
  } = useCreatePost({
    onSuccess: (data) => {
      console.log("Success! City data:", data);
    },
    onError: (error) => {
      console.error("Error fetching city data:", error);
    },
  });
  const date = new Date();
  const currentAccount = useAccount();
  const textareaRef = useRef();
  const [type, setType] = useState("comment");
  const [text, setText] = useState("");
  const [active, setActive] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [pollData, setPollData] = useState({
    options: ["", ""],
    selectedDays: Days[date.toLocaleDateString("tr-TR", { day: "2-digit" })],
    selectedHour: date.getHours(),
    selectedMinute: date.getMinutes(),
  });

  const checkTextLength = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  const submitButton = () => {
    if (type === "comment") {
      const postData = {
        content: text,
        tags: selectedTags,
        photos: [],
      };
      createPost({ post: postData });
    } else if (type === "poll") {
      console.log("Poll Data:", pollData);
    }
  };

  return (
    <div className="w-full pt-1 border-b border-[color:var(--background-third)]">
      <div className="px-3 flex ">
        <div className="mr-3 pt-3">
          <img
            src={currentAccount?.avatar || "https://placehold.co/40x40"}
            className="w-10 h-10 bg-gray-300 rounded-full object-cover"
            alt="avatar"
          />
        </div>
        <div className="flex flex-col flex-1 justify-center ">
          <div className="flex flex-col w-full pb-2">
            <div className="py-4 h-auto  overflow-hidden w-full text-xl">
              <textarea
                ref={textareaRef}
                onClick={() => {
                  setActive(true);
                }}
                id="auto-expanding-textarea"
                onInput={checkTextLength}
                value={text}
                onChange={(e) => setText(e.target.value)}
                className=" w-full  placeholder:text-[color:var(--color-base-secondary)] overflow-hidden bg-[color:var(--background-primary)] outline-none text-[20px] text-[color:var(--color-base)]   resize-none leading-6"
                placeholder={"Soru Sorunuz..."}
              />
            </div>
            {active && type === "comment" && (
              <CommentTags
                selectedTags={selectedTags}
                setSelectedTags={setSelectedTags}
              />
            )}
            {type === "poll" && (
              <PollForm
                setType={setType}
                pollData={pollData}
                setPollData={setPollData}
              />
            )}
          </div>
          <TextInputBottom
            submit={submitButton}
            textLength={text.length}
            setType={setType}
          />
        </div>
      </div>
    </div>
  );
}
