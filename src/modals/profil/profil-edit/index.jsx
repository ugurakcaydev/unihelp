import { useState } from "react";
import { CameraIcon } from "../../../constant/icons";

function ProfileEditModal() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setSelectedImage(imageURL);
    }
  };

  return (
    <div className="min-h-[280px] flex flex-col items-center justify-start p-5 space-y-5">
      <div className="w-28 h-28 group relative rounded-full bg-gray-600 border-2 border-[color:var(--color-secondary)] flex items-center justify-center">
        {selectedImage ? (
          <img
            src={selectedImage}
            alt="Profile avatar"
            className="w-full h-full rounded-full"
          />
        ) : (
          <img
            src="https://placehold.co/150x150"
            alt="Profile avatar"
            className="w-full h-full rounded-full"
          />
        )}
        <button
          className="w-9 h-9 rounded-full flex items-center justify-center bg-black/10 border border-[color:var(--color-secondary)] absolute top-1/2 -translate-y-1/2"
          onClick={() => document.getElementById("fileInput").click()}
        >
          <CameraIcon className={"text-white"} />
        </button>

        <input
          id="fileInput"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
      </div>

      <div className="font-bold translate-y-4 space-y-7 flex flex-col justify-center items-center">
        <div>Kullanıcı Profil Fotoğrafınızı Burada Düzenleyebilirsiniz </div>

        <button className="bg-[color:var(--color-primary)] text-white h-8 w-28 rounded-full hover:bg-[color:var(--color-secondary)]">
          Kaydet
        </button>
      </div>
    </div>
  );
}

export default ProfileEditModal;
