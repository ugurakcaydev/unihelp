import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import classNames from "classnames";
import React from "react";
import { CheckedIcon } from "../../constant/icons";
import { IoChevronDown } from "react-icons/io5";

export default function ListBoxComponent({
  title,
  array,
  selected,
  setSelected,
  className,
}) {
  return (
    <div className="w-full">
      <Listbox value={selected} onChange={setSelected}>
        <ListboxButton className="relative flex items-center justify-between  w-full rounded-lg border outline-none  py-1 px-3 text-left text-sm/6 text-black">
          <div className="flex flex-col">
            <p className="text-gray-500">{`${title}`}</p>
            <p className="font-semibold">{selected}</p>
          </div>
          <div>
            <IoChevronDown
              className="group pointer-events-none  size-4 fill-black/60"
              aria-hidden="true"
            />
          </div>
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          transition
          className={classNames(
            "w-[var(--button-width)] !max-h-[200px] rounded-xl border outline-none bg-white p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none",
            "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
          )}
        >
          {array.map((item) => (
            <ListboxOption
              key={item}
              value={item}
              className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-black/10"
            >
              <div className="text-sm/6 text-black">{item}</div>
              <CheckedIcon className="invisible size-4 fill-white group-data-[selected]:visible" />
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
}
