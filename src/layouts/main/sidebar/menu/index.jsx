import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { mainMenu } from "../../../../utils/const";

function Menu() {
  return (
    <nav className="mt-1.5 w-full">
      {mainMenu.map((menu, index) => {
        return (
          <NavLink to={menu?.path} className="py-[3px] block group" key={index}>
            {({ isActive }) => (
              <div
                className={classNames(
                  " py-2 px-2.5 rounded-full  transition-colors inline-flex items-center gap-5 group-hover:bg-[color:var(--background-third)] desktop:py-3"
                )}
              >
                <div className="w-[26.25px] h-[26.25px] relative">
                  {menu?.notification && (
                    <span className="w-[18px] h-[18px] bg-[color:var(--color-primary)] text-[color:var(--background-primary)]  rounded-full  absolute -top-1.5 -right-1 flex justify-center items-center text-[11px]">
                      {menu?.notification}
                    </span>
                  )}
                  {menu?.newPost > 1 && (
                    <span className="w-[8px] h-[8px] bg-[color:var(--color-primary)] text-[color:var(--background-primary)]  rounded-full  absolute -top-1 -right-0 flex justify-center items-center"></span>
                  )}
                  {!isActive && menu.icon.passive}
                  {isActive && menu.icon.active}
                </div>
                <div className={"text-xl pr-4"}>{menu.title}</div>
              </div>
            )}
          </NavLink>
        );
      })}

      {/* <More />
      <div className="py-3 mt-2 w-[90%]">
        <Button size="large">Gönder</Button>
      </div> */}
    </nav>
  );
}

export default Menu;
