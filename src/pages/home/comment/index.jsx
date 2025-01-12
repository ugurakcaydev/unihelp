import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import classNames from "classnames";
import { useState, useRef, useEffect } from "react";
import { useAccount } from "../../../store/auth/hooks";
import TextInputBottom from "../../../components/textInputBottom";
import PollForm from "../../../components/commentPollForm";
import { tags } from "../../../utils/const";
import { CheckedIcon, XIcon } from "../../../constant/icons";
import { IoIosArrowForward } from "react-icons/io";

export default function Comment() {
  const currentAccount = useAccount();
  const [active, setActive] = useState(false);
  const [textLength, setTextLength] = useState(0);
  const [poll, setPoll] = useState(false);
  const textareaRef = useRef();

  const [selectedTags, setSelectedTags] = useState([]);
  const [searchTagQuery, setSearchTagQuery] = useState("");

  const handleAddTag = (tag) => {
    if (selectedTags.length < 3 && !selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleRemoveTag = (tag) => {
    setSelectedTags((prev) => prev.filter((t) => t !== tag));
  };

  const handleInputChange = (e) => {
    setSearchTagQuery(e.target.value);
  };

  const filteredTags = tags.filter((tag) =>
    tag.toLowerCase().includes(searchTagQuery.toLowerCase())
  );

  const handleCustomTagAdd = () => {
    if (
      searchTagQuery &&
      !selectedTags.includes(searchTagQuery) &&
      selectedTags.length < 3
    ) {
      setSelectedTags((prev) => [...prev, searchTagQuery]);
      setSearchTagQuery("");
    }
  };

  const checkTextLength = () => {
    const textarea = textareaRef.current;

    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }

    setTextLength(textarea.value.length);
  };
  useEffect(() => {}, [textLength]);

  return (
    <div className=" pt-1 border-b border-[color:var(--background-third)]">
      <div className=" px-4 flex ">
        <div className="mr-3 pt-3">
          <img
            src={currentAccount?.avatar || "https://placehold.co/40x40"}
            className="w-10 h-10 bg-gray-300 rounded-full object-cover"
            alt="avatar"
          />
        </div>
        <div className=" pt-[4px] flex flex-col flex-1 justify-center ">
          <div className="flex flex-col w-full  border-b border-[color:var(--background-third)]">
            <div className="py-3 h-auto  overflow-hidden w-full text-xl ">
              <textarea
                ref={textareaRef}
                onClick={() => {
                  setActive(true);
                }}
                id="auto-expanding-textarea"
                onInput={checkTextLength}
                className={classNames(
                  " w-full   placeholder:text-[color:var(--color-base-secondary)] overflow-hidden bg-[color:var(--background-primary)] outline-none text-[20px] text-[color:var(--color-base)]   resize-none leading-6",
                  {
                    " ": active === true,
                  }
                )}
                placeholder={"Soru sor"}
              />
              {poll && <PollForm setPoll={setPoll} />}
            </div>

            {active && !poll && (
              <Listbox
                as="div"
                value={selectedTags}
                onChange={(newTag) => handleAddTag(newTag)}
                className={classNames(
                  "relative outline-none flex items-center justify-start gap-x-1  mb-2"
                )}
              >
                <ListboxButton
                  as="button"
                  onClick={() => {
                    setActive(true);
                  }}
                  className={classNames(
                    "flex items-center justify-start gap-x-1 text-center font-bold text-[14px]  min-h-[24px] hover:bg-[#1d7df01a]  w-fit text-[color:var(--color-primary)] rounded-full -ml-2 px-3 py-1"
                  )}
                >
                  Tag Seçiniz (max 3)
                </ListboxButton>

                <ListboxOptions
                  as="ul"
                  anchor="bottom"
                  className={classNames(
                    " min-w-[230px] min-h-[250px] max-h-[480px] h-auto absolute bg-[color:var(--background-primary)] shadow-md rounded-2xl overflow-hidden z-10 "
                  )}
                >
                  <div className="w-full h-auto flex flex-col items-start justify-start relative ">
                    <div className="w-full relative flex flex-col items-start justify-start text-left border-b border-b-[color:var(--background-third)] p-3">
                      <div className="w-full h-auto relative">
                        <input
                          value={searchTagQuery}
                          onChange={handleInputChange}
                          type="text"
                          className="w-full outline-none border px-2 py-2 text-sm"
                        />
                        {searchTagQuery && !tags.includes(searchTagQuery) && (
                          <button
                            className="absolute top-1/2 -translate-y-1/2 right-2 p-1 hover:bg-zinc-100 rounded-full"
                            onClick={handleCustomTagAdd}
                          >
                            <IoIosArrowForward />
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                      {filteredTags.map((tag) => {
                        let isSelected = selectedTags.some(
                          (selectedTag) => selectedTag === tag
                        );
                        return (
                          <ListboxOption
                            as="li"
                            value={tag}
                            className="py-2 hover:bg-[#f7f9f9] w-full text-left flex items-center max-h-[200px] overflow-y-auto justify-start gap-x-1 text-sm  cursor-pointer "
                            key={tag}
                          >
                            <button
                              type="button"
                              onClick={() => handleAddTag(tag)}
                              className="px-4"
                            >
                              {tag}
                            </button>
                            {isSelected && (
                              <CheckedIcon className="text-[color:var(--color-primary)] w-5" />
                            )}
                          </ListboxOption>
                        );
                      })}
                    </div>
                  </div>
                </ListboxOptions>

                <div className=" flex flex-wrap gap-2">
                  {selectedTags &&
                    selectedTags.length > 0 &&
                    selectedTags.map((tag) => (
                      <div
                        key={tag}
                        className="flex items-center text-xs font-semibold bg-zinc-100 px-3 py-1 rounded-full"
                      >
                        {tag}

                        <XIcon
                          onClick={() => handleRemoveTag(tag)}
                          className={
                            "w-4 h-3 ml-2  text-red-500 cursor-pointer"
                          }
                        />
                      </div>
                    ))}
                </div>
              </Listbox>
            )}
          </div>
          <TextInputBottom textLength={textLength} setPoll={setPoll} />
        </div>
      </div>
    </div>
  );
}
