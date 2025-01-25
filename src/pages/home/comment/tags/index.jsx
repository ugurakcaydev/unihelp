import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";

import classNames from "classnames";

import { IoIosArrowForward } from "react-icons/io";
import { CheckedIcon, XIcon } from "../../../../constant/icons";
import { tags } from "../../../../utils/const";
import { useState } from "react";

function CommentTags({ selectedTags, setSelectedTags }) {
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

  return (
    <Listbox
      as="div"
      value={selectedTags}
      onChange={(newTag) => handleAddTag(newTag)}
      className={classNames(
        "relative outline-none flex items-center justify-start gap-x-1"
      )}
    >
      <ListboxButton
        as="button"
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
                className={"w-4 h-3 ml-2  text-red-500 cursor-pointer"}
              />
            </div>
          ))}
      </div>
    </Listbox>
  );
}

export default CommentTags;
