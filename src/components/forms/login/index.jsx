import Button from "../../Button";
import Separator from "../../separator";

function LoginForm() {
  return (
    <>
      <div className="w-full flex flex-col gap-y-5 max-w-[350px]">
        <div className="w-full flex flex-col gap-y-3 ">
          <div className="flex flex-col items-start justify-start gap-y-1">
            <label htmlFor="email" className="font-semibold text-[15px]">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full outline-none bg-[#e7e9ea] text-black px-2 py-1.5 rounded-sm"
            />
          </div>

          <div className="flex flex-col items-start justify-start gap-y-1">
            <label htmlFor="password" className="font-semibold text-[15px]">
              Şifre
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full outline-none text-black px-2 py-1.5 rounded-sm"
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-y-3">
          <Button label={"Giriş Yap"} onClick={() => {}} />
          <Separator />
          <Button label={"Kayıt Ol"} onClick={() => {}} />
        </div>
      </div>
    </>
  );
}

export default LoginForm;
