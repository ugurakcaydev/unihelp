import { PropTypes } from "prop-types";
import { ReturnButton } from "../../constant/icons";

function OutletHeader({ title = "Sabit Başlık", iconArray, returnButton }) {
  return (
    <div className="w-full bg-white h-[53px] flex items-center border-b border-b-[color:var(--background-third)] sticky top-0 z-[4]  ">
      <div className="w-full flex items-center justify-between px-3 ">
        <div className="flex items-center justify-start gap-x-4">
          {returnButton && <ReturnButton href={"/"} />}
          <span className="text-xl font-bold overflow-auto break-words text-[color:var(--color-base)] ">
            {title}
          </span>
        </div>
        {iconArray && <div>icon</div>}
      </div>
    </div>
  );
}

export default OutletHeader;

OutletHeader.propTypes = {
  title: PropTypes.string.isRequired,
  iconArray: PropTypes.array,
  returnButton: PropTypes.bool,
};
