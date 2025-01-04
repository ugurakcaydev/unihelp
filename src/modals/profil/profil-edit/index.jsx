import { CameraIcon } from "../../../constant/icons";

function ProfileEditModal() {
  return (
    <div className="min-h-[300px] flex flex-col items-center justify-start p-3">
      <div className="w-28 h-28 group relative rounded-full bg-gray-600  border-2 border-[color:var(--color-secondary)] flex items-center justify-center">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile avatar"
          className="w-full h-full rounded-full"
        />
        <button className="w-9 h-9 rounded-full flex items-center justify-center bg-black/10 border border-[color:var(--color-secondary)] absolute top-1/2  -translate-y-1/2 ">
          <CameraIcon className={"text-white"} />
        </button>
      </div>
    </div>
  );
}

export default ProfileEditModal;
