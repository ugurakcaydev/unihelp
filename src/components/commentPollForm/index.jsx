import { useState } from "react";
import ListBoxComponent from "~/components/listBox";
import { Days, Hours, Minutes } from "../../utils/times";

export default function PollForm({ setPoll }) {
  const date = new Date();
  const [selectedDays, setSelectedDays] = useState(
    Days[date.toLocaleDateString("tr-TR", { day: "2-digit" })]
  );
  const [selectedHour, setSelectedHour] = useState(date.getHours());
  const [selectedMinute, setSelectedMinute] = useState(date.getMinutes());
  return (
    <>
      <div className="group border-[1px] border-[#38444d] rounded-2xl">
        <div className="flex p-3 ">
          <div className="flex flex-col w-full gap-y-3">
            <div className="relative px-3 pt-3 pb-2 border-[1px] border-[#38444d] rounded bg-[color:var(--background-primary)]">
              <input
                className=" w-full  mt-1 text-[18px] bg-[color:var(--background-primary)] outline-none transition-all peer"
                type="text"
                id="inputField"
              />
              <label
                htmlFor="inputField"
                id="label"
                className="absolute  left-3 top-1/2 -translate-y-1/2 text-lg text-[color:var(--color-base-secondary)] transition-all duration-100 transform   peer-focus:text-[color:var(--color-primary)]   peer-focus:scale-[75%] peer-focus:top-3 peer-focus:left-0 "
              >
                Seçenek 1
              </label>
            </div>
            <div className="relative px-3 pt-3 pb-2 border-[1px] border-[#38444d] rounded bg-[color:var(--background-primary)]">
              <input
                className=" w-full  mt-1 text-[18px] bg-[color:var(--background-primary)] outline-none transition-all peer"
                type="text"
                id="inputField"
              />
              <label
                htmlFor="inputField"
                id="label"
                className="absolute  left-3 top-1/2 -translate-y-1/2 text-lg text-[color:var(--color-base-secondary)] transition-all duration-100 transform   peer-focus:text-[color:var(--color-primary)]   peer-focus:scale-[75%] peer-focus:top-3 peer-focus:left-0 "
              >
                Seçenek 2
              </label>
            </div>
          </div>
          <div className="flex justify-center items-end w-[10%]  text-[color:var(--color-primary)] ">
            <div className="p-2 -translate-y-2 rounded-full cursor-pointer transition-colors hover:bg-[color:var(--color-secondary)]">
              <svg height={20} viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M11 11V4h2v7h7v2h-7v7h-2v-7H4v-2h7z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col p-2 border-y-[1px] border-[#38444d] ">
          <span className="text-[15px] text-[color:var(--color-base-third)]">
            Anket uzunluğu
          </span>
          <div className="flex gap-x-3 items-center">
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
            className=" w-full text-[15px] text-[#f4212e] "
          >
            Anketi kaldır
          </button>
        </div>
      </div>
    </>
  );
}
