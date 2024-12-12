import { PropTypes } from "prop-types";
import { ReturnButton } from "../../assets/Icons/icons";

function OutletHeader({ title, iconArray, returnButton }) {
  return (
    <div className="w-full h-[53px] flex items-center border-b border-b-[color:var(--background-third)] sticky top-0 z-[2]  ">
      <div className="w-full flex items-center justify-between px-3 ">
        <div className="flex items-center justify-start gap-x-3">
          {returnButton && <ReturnButton href={"/"} />}
          <span className="text-xl font-semibold overflow-auto break-words text-[color:var(--color-base)] ">
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
  returnButton: PropTypes.boolean,
};

OutletHeader.defaultProps = {
  title: "Sabit Başlık",
};
