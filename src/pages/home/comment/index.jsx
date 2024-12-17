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
import { WhoCanAnswer } from "../../../utils/const";
import { CheckedIcon } from "../../../assets/Icons/icons";

export default function Comment() {
  const currentAccount = useAccount();
  const [active, setActive] = useState(false);
  const [whosCanAnswer, setWhoCanAnswer] = useState(WhoCanAnswer[0]);
  const [textLength, setTextLength] = useState(0);
  const textareaRef = useRef();

  const checkTextLength = () => {
    const textarea = textareaRef.current;

    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }

    setTextLength(textarea.value.length);
  };
  useEffect(() => {}, [textLength]);

  //*Anket
  const [poll, setPoll] = useState(false);

  return (
    <div className=" pt-1 border-b border-[color:var(--background-third)]">
      <div className=" px-4 flex ">
        <div className="mr-3 pt-3">
          <img
            src={currentAccount.avatar}
            className="w-10 h-10 bg-gray-300 rounded-full object-cover"
            alt=""
          />
        </div>
        <div className=" pt-[4px] flex flex-col flex-1 justify-center ">
          <div className="flex flex-col w-full  border-b border-[color:var(--background-third)]">
            <div className="py-3 w-full text-xl h-full">
              <textarea
                ref={textareaRef}
                onClick={() => {
                  setActive(true);
                }}
                id="auto-expanding-textarea"
                onInput={checkTextLength}
                className={classNames(
                  " w-full max-h-[24px] h-auto placeholder:text-[color:var(--color-base-secondary)]  bg-[color:var(--background-primary)] outline-none text-[20px] text-[color:var(--color-base)]  overflow-y-hidden  resize-none leading-6",
                  {
                    "max-h-max ": active === true,
                  }
                )}
                placeholder={"Soru sor"}
              />
              {poll && <PollForm setPoll={setPoll} />}
            </div>

            {active && (
              <Listbox
                as="div"
                value={whosCanAnswer}
                onChange={setWhoCanAnswer}
                className={classNames("relative outline-none")}
              >
                <ListboxButton
                  as="button"
                  onClick={() => {
                    setActive(true);
                  }}
                  className={classNames(
                    "flex items-center justify-start gap-x-1 text-center font-bold text-[14px]  min-h-[24px] hover:bg-[#1d7df01a]  w-fit text-[color:var(--color-primary)] rounded-full -ml-2 px-3 py-1 mb-2"
                  )}
                >
                  {whosCanAnswer.text}
                </ListboxButton>

                <ListboxOptions
                  as="ul"
                  anchor="bottom"
                  className={classNames(
                    "w-[320px] min-w-[260px] min-h-[30px] max-h-[480px] h-auto absolute bg-[color:var(--background-primary)] shadow-md rounded-2xl overflow-hidden z-10 "
                  )}
                >
                  <div className="w-full h-auto flex flex-col items-start justify-start relative ">
                    <div className="flex flex-col items-start justify-start text-left border-b border-b-[color:var(--background-third)] p-3">
                      <h3 className="break-words text-[15px] font-semibold ">
                        Kimler yanıtlayabilir ?
                      </h3>
                      <p className="text-[14px] font-normal text-[color:var(--color-base-secondary)]">
                        Bu gönderiyi kimlerin yanıtlayabileceğini seç.
                        Bahsedilen herkes yanıt verebilir.
                      </p>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                      {WhoCanAnswer.map((item) => (
                        <ListboxOption
                          as="li"
                          value={item}
                          className="py-3 hover:bg-[#f7f9f9] w-full text-left flex items-center justify-start gap-x-1  cursor-pointer "
                          key={item.id}
                        >
                          <span className="px-3">{item.text}</span>
                          {whosCanAnswer.id === item.id && (
                            <CheckedIcon
                              className={"text-[color:var(--color-primary)]"}
                            />
                          )}
                        </ListboxOption>
                      ))}
                    </div>
                  </div>
                </ListboxOptions>
              </Listbox>
            )}
          </div>
          <TextInputBottom textLength={textLength} setPoll={setPoll} />
        </div>
      </div>
    </div>
  );
}
