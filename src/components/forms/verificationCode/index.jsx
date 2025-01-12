import { useState } from "react";
import { showToast } from "../../../utils/toast";
import { apiClient } from "../../../services/apiClient";
import classNames from "classnames";
import { BeatLoader } from "react-spinners";

function VerificationForm({ user, setCurrentForm }) {
  const [code, setCode] = useState(Array(6).fill(""));
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isDisabled = code.some((digit) => digit === "");

  const handleChange = (value, index) => {
    if (value.length > 1 || isNaN(Number(value))) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Odak bir sonraki kutuya geçer
    if (value !== "" && index < 5) {
      const nextInput = document.getElementById(`digit-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleSubmit = async () => {
    const verificationCode = code.join("");
    if (verificationCode.length !== 6) {
      setError("Lütfen tüm kutuları doldurun!");
      return;
    }
    setError(""); // Hata mesajını temizle
    setIsSubmitting(true);

    try {
      const response = await apiClient.emailVerification(
        // burayı yap
        email,
        verificationCode
      );
      if (response.statusCode === 200 && response.success) {
        showToast("success", "E-posta başarıyla onaylandı.");
        setIsSubmitting(false);
        setTimeout(() => {
          setCurrentForm("login");
        }, 500);
      }
    } catch (error) {
      if (error.response.data.message[0] === "Verification code is invalid!") {
        setError("Girilen kod yanlış!");
      }
      setIsSubmitting(false);
      return;
    }
  };

  return (
    <div className="w-[70%] flex flex-col items-start justify-start   rounded-lg">
      <div className="text-sm  mb-4">
        <span className="font-semibold underline underline-offset-2">
          {"test@gmail.com"}
        </span>{" "}
        adresine gönderilen doğrulama kodunu girin.
      </div>
      <div className="flex items-center justify-between w-full  mb-5">
        {code.map((digit, index) => (
          <input
            key={index}
            id={`digit-${index}`}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
            style={{ width: "50px", height: "50px" }}
            className={classNames(
              " text-center text-black text-lg border border-gray-300 rounded-md outline-none focus:outline-none focus:ring focus:ring-indigo-200",
              {
                "!border-red-500": error,
              }
            )}
          />
        ))}
      </div>
      <p className="text-red-500 text-sm mb-6 h-1">{error ? error : ""}</p>
      <button
        onClick={handleSubmit}
        className={classNames(
          "w-full rounded-md py-1.5 text-white bg-[#3074FF] hover:bg-[#1b67ff] ",
          {
            "opacity-50 cursor-not-allowed": isDisabled,
          }
        )}
      >
        {isSubmitting ? (
          <BeatLoader size={8} color="#fff" className=" text-white" />
        ) : (
          <p>Onayla</p>
        )}
      </button>
    </div>
  );
}

export default VerificationForm;
