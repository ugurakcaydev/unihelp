import AppearanceModal from "../modals/appearance";
import ImageDetailModal from "../modals/imageDetail";
import ProfileEditModal from "../modals/profil/profil-edit";

const modals = [
  {
    name: "appearance",
    element: AppearanceModal,
  },
  { name: "profileEdit", element: ProfileEditModal },
  { name: "imageDetail", element: ImageDetailModal },
];

export default modals;
