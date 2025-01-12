import LoginForm from "../../components/forms/login";
import { useState } from "react";
import RegisterForm from "../../components/forms/register";

export default function LoginPage() {
  const [currentForm, setCurrentForm] = useState("login");
  return (
    <>
      <div className=" bg-black flex flex-col min-h-screen justify-between items-center  ">
        <div className=" flex items-center flex-shrink flex-grow ">
          <div className="w-[48vw]  flex items-center justify-center  desktop:w-[55vw]">
            <svg
              className={`w-full p-[32px]`}
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              height={440.75}
              viewBox="0 0 24 24"
            >
              <path
                fill="#fff"
                d="M 12 2 C 11.846875 2 11.693234 2.0349687 11.552734 2.1054688 L 3.5527344 6.1054688 C 3.2137344 6.2744688 3 6.621 3 7 L 3 15.65625 C 3 15.99025 3.1673125 16.303281 3.4453125 16.488281 C 4.1103125 16.931281 5 16.45525 5 15.65625 L 5 7.6171875 L 12 4.1171875 L 19 7.6171875 L 19 15.681641 C 19 16.480641 19.889688 16.956672 20.554688 16.513672 C 20.832687 16.328672 21 16.016641 21 15.681641 L 21 7 C 21 6.621 20.786266 6.2744688 20.447266 6.1054688 L 12.447266 2.1054688 C 12.306266 2.0349687 12.153125 2 12 2 z M 9.0605469 9.0800781 C 8.8938125 9.0697344 8.7209375 9.1008437 8.5546875 9.1835938 C 8.2156875 9.3515937 8 9.699125 8 10.078125 L 8 19 C 8 19.334 8.1673125 19.647031 8.4453125 19.832031 L 11.445312 21.832031 C 11.781313 22.056031 12.219687 22.056031 12.554688 21.832031 L 15.554688 19.832031 C 15.833687 19.647031 16 19.334 16 19 L 16 10.078125 C 16 9.699125 15.784312 9.3525938 15.445312 9.1835938 C 14.780313 8.8525937 14 9.335125 14 10.078125 L 14 18.464844 L 12 19.798828 L 10 18.464844 L 10 10.078125 C 10 9.520875 9.56075 9.1111094 9.0605469 9.0800781 z"
              ></path>
            </svg>
          </div>
          <div className="min-w-[45vw] flex h-screen  justify-start px-4">
            <div className="min-w-[437px] h-full max-w-[500px] w-full px-5 flex flex-col gap-y-5 justify-center  text-[#e7e9ea] text-left">
              {/* Yazılar için sabit bir kapsayıcı */}

              <div className="flex flex-col gap-y-3">
                <div className="font-bold leading-[60px] break-words tracking-[-1.2px] font-[Verdana]">
                  <span className="3xl:max-w-auto 2xl:text-[50px] text-[40px]">
                    Şu anda olup bitenler
                  </span>
                </div>
                <span className="leading-9 text-[26px] font-bold font-[Verdana]">
                  Hemen katıl.
                </span>
              </div>
              {/* Form alanı */}
              <div>
                {currentForm === "login" && (
                  <LoginForm setCurrentForm={setCurrentForm} />
                )}
                {currentForm === "register" && (
                  <RegisterForm setCurrentForm={setCurrentForm} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
