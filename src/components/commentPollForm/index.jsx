import { Days, Hours, Minutes } from "../../utils/times";
import ListBoxComponent from "../listbox";

export default function PollForm({ setType, pollData, setPollData }) {
  const handleOptionChange = (index, value) => {
    const newAnswers = [...pollData.answers];
    newAnswers[index] = value;
    setPollData({ ...pollData, answers: newAnswers });
  };

  const handleDayChange = (newDay) => {
    setPollData({ ...pollData, selectedDays: newDay });
  };

  const handleHourChange = (newHour) => {
    setPollData({ ...pollData, selectedHour: newHour });
  };

  const handleMinuteChange = (newMinute) => {
    setPollData({ ...pollData, selectedMinute: newMinute });
  };

  const addOption = () => {
    if (pollData.answers.length < 4) {
      setPollData((prev) => ({ ...prev, answers: [...prev.answers, ""] }));
    }
  };

  return (
    <>
      <div className="group border-[1px] border-[#38444d] rounded-2xl">
        <div className="flex w-full items-end justify-start p-3">
          <div className="flex flex-1 flex-col gap-y-3">
            {pollData.answers.map((option, index) => (
              <div
                key={index}
                className="relative flex px-3 pt-3 pb-2 border-[1px] border-[#38444d] rounded bg-[color:var(--background-primary)]"
              >
                <input
                  className="w-full mt-1 text-[18px]  bg-[color:var(--background-primary)] outline-none transition-all peer"
                  type="text"
                  value={option.text}
                  onChange={(e) => {
                    handleOptionChange(index, e.target.value);
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
          {pollData.answers.length < 4 && (
            <div className="w-10 flex items-center justify-center py-3">
              {pollData.answers.length > 1 && pollData.answers.length < 4 && (
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
              selected={pollData.selectedDays}
              setSelected={handleDayChange}
            />
            <ListBoxComponent
              className={"min-w-[180px]"}
              title={"Saat"}
              array={Hours}
              selected={pollData.selectedHour}
              setSelected={handleHourChange}
            />
            <ListBoxComponent
              className={"min-w-[180px]"}
              title={"Dakika"}
              array={Minutes}
              selected={pollData.selectedMinute}
              setSelected={handleMinuteChange}
            />
          </div>
        </div>

        <div className="w-full flex-1 justify-center items-center rounded-b-2xl p-2 transition-all duration-200 hover:bg-[#f4212e1a]">
          <button
            onClick={() => setType("comment")}
            className="w-full text-[15px] text-[#f4212e]"
          >
            Anketi kaldır
          </button>
        </div>
      </div>
    </>
  );
}
