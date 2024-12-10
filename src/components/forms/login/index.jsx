/* eslint-disable react/prop-types */
import { Formik, Form } from "formik";
import CustomButton from "../../Button";
import Separator from "../../separator/index";
import { LoginSchema } from "../../../schema/auth";
import CustomInput from "../../Inputs/Input";
import { useNavigate } from "react-router-dom";
import { login } from "../../../store/auth/actions";
import { showToast } from "../../../utils/toast";

export default function LoginForm({ setCurrentForm }) {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={LoginSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          const response = login(values.email, values.password);
          console.log(response);
          if (response.success) {
            showToast("success", "Giriş Başarılı");
            navigate("/");
          } else {
            showToast("error", `${response.error}`);
            console.log("first");
          }
          setSubmitting(false);
        }, 1000);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="w-full flex flex-col gap-y-5 max-w-[330px]">
          <CustomInput
            label={"Email"}
            placeholder="Email adresinizi girin"
            name={"email"}
            type={"email"}
          />
          <CustomInput
            label={"Şifre"}
            placeholder="Şifrenizi girin"
            name={"password"}
            type={"password"}
          />
          <div className="flex flex-col gap-y-2.5 mt-2">
            <CustomButton
              className={"secondary"}
              label="Giriş Yap"
              type="submit"
              isLoading={isSubmitting}
            />

            <Separator />
            <CustomButton
              className={"primary"}
              label="Kayıt Ol"
              onClick={() => setCurrentForm("register")}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
}
