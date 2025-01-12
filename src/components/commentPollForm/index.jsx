import { useState } from "react";

import { Days, Hours, Minutes } from "../../utils/times";
import ListBoxComponent from "../listbox";

export default function PollForm({ setPoll }) {
  const date = new Date();

  const [options, setOptions] = useState(["", ""]);
  const [selectedDays, setSelectedDays] = useState(
    Days[date.toLocaleDateString("tr-TR", { day: "2-digit" })]
  );
  const [selectedHour, setSelectedHour] = useState(date.getHours());
  const [selectedMinute, setSelectedMinute] = useState(date.getMinutes());

  const addOption = () => {
    if (options.length < 4) {
      setOptions([...options, ""]);
    }
  };

  return (
    <>
      <div className="group border-[1px] border-[#38444d] rounded-2xl">
        <div className="flex w-full items-end justify-start p-3">
          <div className="flex flex-1 flex-col gap-y-3">
            {options.map((option, index) => (
              <div
                key={index}
                className="relative flex px-3 pt-3 pb-2 border-[1px] border-[#38444d] rounded bg-[color:var(--background-primary)]"
              >
                <input
                  className="w-full mt-1 text-[18px]  bg-[color:var(--background-primary)] outline-none transition-all peer"
                  type="text"
                  value={option}
                  onChange={(e) => {
                    const newOptions = [...options];
                    newOptions[index] = e.target.value;
                    setOptions(newOptions);
                  }}
                />
                <label
                  className={`absolute left-3 top-1/2 -translate-y-1/2  text-[color:var(--color-base-secondary)] transition-all duration-100 transform ${
                    option.length > 0
                      ? "text-[color:var(--color-primary)] scale-[75%] top-3 !left-0"
                      : "peer-focus:text-[color:var(--color-primary)] peer-focus:scale-[75%] peer-focus:top-3 peer-focus:left-0"
                  }`}
                >
                  {`Seçenek ${index + 1}`}
                </label>
              </div>
            ))}
          </div>
          {options.length < 4 && (
            <div className="w-10 flex items-center justify-center py-3">
              {options.length > 1 && options.length < 4 && (
                <button
                  className="text-[color:var(--color-primary)] hover:text-[color:var(--color-secondary)]"
                  onClick={addOption}
                >
                  <svg height={20} viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M11 11V4h2v7h7v2h-7v7h-2v-7H4v-2h7z"
                    ></path>
                  </svg>
                </button>
              )}
            </div>
          )}
        </div>

        <div className="w-full flex flex-col items-start gap-y-2 p-2 border-y-[1px] border-[#38444d]">
          <h2 className="text-[15px] text-[color:var(--color-base-third)]">
            Anket uzunluğu
          </h2>
          <div className="w-full flex justify-between gap-x-3 items-start">
            <ListBoxComponent
              className={"min-w-[112px]"}
              title={"Gün"}
              array={Days}
              selected={selectedDays}
              setSelected={setSelectedDays}
            />
            <ListBoxComponent
              className={"min-w-[180px]"}
              title={"Saat"}
              array={Hours}
              selected={selectedHour}
              setSelected={setSelectedHour}
            />
            <ListBoxComponent
              className={"min-w-[180px]"}
              title={"Dakika"}
              array={Minutes}
              selected={selectedMinute}
              setSelected={setSelectedMinute}
            />
          </div>
        </div>

        <div className="w-full flex-1 justify-center items-center rounded-b-2xl p-2 transition-all duration-200 hover:bg-[#f4212e1a]">
          <button
            onClick={() => setPoll(false)}
            className="w-full text-[15px] text-[#f4212e]"
          >
            Anketi kaldır
          </button>
        </div>
      </div>
    </>
  );
}
