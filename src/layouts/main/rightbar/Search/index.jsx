import classNames from "classnames";
import { useState, useRef, useEffect } from "react";
import { useClickAway } from "react-use";
import { VerifiedIcon } from "../../../../icons";
import { Link } from "react-router-dom";
import useSearch from "../../../../hooks/useSearch";
import LayoutLoder from "../../../../components/loader/layoutLoader";

function Search() {
  const [query, setQuery] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [tags, setTags] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [focus, setFocus] = useState(false);

  // Debounce query to limit API calls
  useEffect(() => {
    if (query.length > 0) {
      const debounceId = setTimeout(() => {
        setDebouncedSearchTerm(query);
      }, 800);

      return () => {
        clearTimeout(debounceId);
      };
    }
  }, [query]);

  const { data, isLoading } = useSearch(debouncedSearchTerm, {
    enabled: !!debouncedSearchTerm, // Prevent API call when the search term is empty
  });

  // Fetch data when `debouncedSearchTerm` changes
  useEffect(() => {
    if (!isLoading && data) {
      setAccounts((data.users || []).slice(0, 5));
      setTags((data.tags || []).slice(0, 3));
    }
  }, [data, isLoading]);

  const ref = useRef();
  useClickAway(ref, () => {
    setFocus(false);
  });

  const clearInput = () => {
    setQuery("");
    setFocus(false);
  };

  return (
    <div
      ref={ref}
      className="sticky top-0 bg-[color:var(--background-primary)] min-h-[32px] h-[53px] mb-3 flex items-center z-[2]"
    >
      <label
        htmlFor=""
        className="h-[43px] relative rounded-full bg-[color:var(--background-third)] w-full group border border-transparent focus-within:bg-[color:var(--background-primary)] focus-within:border-[color:var(--color-primary)] "
      >
        <div className="w-[56px] h-full flex items-center justify-center absolute top-0 left-0 pointer-events-none">
          <svg
            className={classNames(
              "min-w-[33px] text-[color:var(--color-base-secondary)]  group-focus-within:text-[color:var(--color-primary)] ",
              {}
            )}
            height={18.75}
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"
            />
          </svg>
        </div>
        <input
          placeholder="Ara"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocus(true)}
          className=" w-full h-full  bg-transparent rounded-full outline-none pl-[56px] text-[15px] "
        />
        {query && focus && (
          <button
            type="button"
            onClick={clearInput}
            className="flex items-center justify-center size-5 p-1 absolute rounded-full text-black bg-[color:var(--color-primary)] top-1/2 -translate-y-1/2 right-3 "
          >
            <svg fill="#fff" width={10} height={10} viewBox="0 0 15 15">
              <path d="M6.09 7.5L.04 1.46 1.46.04 7.5 6.09 13.54.04l1.42 1.42L8.91 7.5l6.05 6.04-1.42 1.42L7.5 8.91l-6.04 6.05-1.42-1.42L6.09 7.5z" />
            </svg>
          </button>
        )}
      </label>
      {focus && (
        <div className="w-[350px] absolute top-full -left-px -translate-y-1 bg-[color:var(--background-primary)] shadow-md  max-h-[calc(80vh-53px)] rounded-lg flex flex-col items-start justify-start  text-center min-h-[50px]">
          {query.length === 0 && (
            <p className=" px-4 py-8 text-[color:var(--color-base-secondary)] text-center leading-5 text-[15px]">
              Kişileri, tagları veya anahtar kelimeleri aramayı dene
            </p>
          )}
          {query.length > 0 && (
            <>
              <div className="w-full h-full overflow-y-auto flex flex-col  *:text-left">
                <Link to={`/search?q=${query}`} onClick={clearInput}>
                  <div className="w-full text-[15px] hover:bg-[color:var(--background-secondary)] border-b-2 border-b-[color:var(--background-secondary)] p-4 text-[color:var(--color-base-secondary)]">
                    <span> {`"${query}" ara`}</span>
                  </div>
                </Link>
                {isLoading && <LayoutLoder size={20} />}
                {!isLoading && (
                  <>
                    {tags && tags.length > 0 && (
                      <div className="w-full flex flex-col items-start justify-start *py-0.5 border-b-2 border-b-[color:var(--background-secondary)]  ">
                        {tags.map((tag) => (
                          <Link
                            to={`/search?q=${tag.name}`}
                            key={tag.id}
                            onClick={clearInput}
                            className="w-full text-[15px] hover:bg-[color:var(--background-secondary)]  p-4 text-[color:var(--color-base-secondary)]"
                          >
                            <span> {`#${tag.name}`}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                    {accounts && accounts.length > 0 && (
                      <div className="w-full flex flex-col items-start justify-start *py-0.5 border-b-2  border-b-[color:var(--background-secondary)]  ">
                        {accounts.map((account, index) => (
                          <Link
                            to={`/${account.username}`}
                            key={`${account.username}-${index}`}
                            onClick={clearInput}
                            className="w-full text-[15px] hover:bg-[color:var(--background-secondary)]  p-4 text-[color:var(--color-base-secondary)]"
                          >
                            <div className="w-full flex items-center justify-start gap-x-2   hover:bg-[color:var(--background-secondary)]">
                              <div className="w-10 h-10 rounded-full bg-zinc-300 overflow-hidden">
                                <img
                                  src={
                                    account?.avatar || "https://placehold.co/40"
                                  }
                                  alt=""
                                  className="rounded-full w-full h-full"
                                />
                              </div>
                              <div className="flex items-center justify-start gap-x-1">
                                <span className="text-sm font-semibold">
                                  {account.username}
                                </span>
                                {account.isVerified && <VerifiedIcon />}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Search;
