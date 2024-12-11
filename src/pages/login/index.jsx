
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
              className="w-full  p-[32px] "
              height={440.75}
              viewBox="0 0 24 24"
            >
              <path
                fill="#fff"
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
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
                {/* {currentForm === "verification" && (
                  <VerificationForm setCurrentForm={setCurrentForm} />
                )} */}
              </div>
            </div>
          </div>
        </div>
      
      </div>
    </>
  );
}
