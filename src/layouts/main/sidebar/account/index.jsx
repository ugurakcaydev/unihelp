import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { useAccount } from "../../../../store/auth/hooks";
import MoreAccount from "./moreAccount";
import classNames from "classnames";
import { Link } from "react-router-dom";
function Account() {
  const account = useAccount();
  console.log(account);
  return (
    <Popover className="relative w-full mb-3 mr-1 mt-auto">
      {account ? (
        <PopoverButton
          className={classNames(
            "flex max-h-[60px] justify-between items-center w-full p-3 rounded-full  transition-all hover:bg-[color:var(--background-third)] outline-none",
            {
              "bg-[color:var(--background-third)]": !account,
            }
          )} //p-2 olacak en büyük font size olduğunda p-2 olmasa da oluyormuş
        >
          <div className="flex gap-x-2.5 items-center">
            <img
              className="w-10 h-10 rounded-full bg-[color:var(--background-secondary)] "
              src={account?.avatar || "https://placehold.co/40x40"}
              alt=""
            />
            {/*p-1 gidecek en büyük font size olduğunda*/}
            <div className="flex flex-col   ">
              <span className="text-[0.938rem] text-[color:var(--color-base)] font-bold text-left flex items-center justify-start  ">
                {account?.name ?? "name"}
                <svg
                  viewBox="0 0 24 24"
                  width={18.75}
                  height={18.75}
                  className="ml-0.5"
                  data-testid="icon-lock"
                >
                  <path
                    fill="currentColor"
                    d="M17.5 7H17v-.25c0-2.76-2.24-5-5-5s-5 2.24-5 5V7h-.5C5.12 7 4 8.12 4 9.5v9C4 19.88 5.12 21 6.5 21h11c1.39 0 2.5-1.12 2.5-2.5v-9C20 8.12 18.89 7 17.5 7zM13 14.73V17h-2v-2.27c-.59-.34-1-.99-1-1.73 0-1.1.9-2 2-2 1.11 0 2 .9 2 2 0 .74-.4 1.39-1 1.73zM15 7H9v-.25c0-1.66 1.35-3 3-3 1.66 0 3 1.34 3 3V7z"
                  />
                </svg>
              </span>
              <span className="text-[color:var(--color-base-secondary)] text-left">
                {" "}
                {account?.username}
              </span>
            </div>
          </div>

          <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
            <g>
              <path
                fill="currentColor"
                d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
              ></path>
            </g>
          </svg>
        </PopoverButton>
      ) : (
        <Link
          to={"/login"}
          className="!bg-transparent  border border-[color:var(--color-primary)] hover:!bg-[#1d9bf01a] w-full flex items-center justify-center text-lg font-semibol  text-[color:var(--color-primary)] max-h-[65.06px] py-2 outline-none shadow-sm rounded-full transition-all hover:scale-[.98]"
        >
          Giriş Yap
        </Link>
      )}

      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        {account && (
          <PopoverPanel className="w-[270px] absolute left-1/2 -translate-x-1/2 bottom-[65px] p-2 border border-[color:var(color-secondary)] shadow-sm rounded-xl overflow-hidden flex flex-col justify-between items-start ">
            <MoreAccount />
          </PopoverPanel>
        )}
      </Transition>
    </Popover>
  );
}

export default Account;
