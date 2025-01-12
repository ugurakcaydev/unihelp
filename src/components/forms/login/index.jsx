import { Formik, Form } from "formik";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login } from "../../../store/auth/actions";
import CustomButton from "../../Button";
import Separator from "../../separator/index";
import { LoginSchema } from "../../../schema/auth";
import CustomInput from "../../Inputs/Input";
import { showToast } from "../../../utils/toast";

export default function LoginForm({ setCurrentForm }) {
  const navigate = useNavigate();

  // Login için mutation
  const mutation = useMutation({
    mutationFn: (values) => login(values.email.trim(), values.password.trim()),
    onSuccess: () => {
      showToast("success", "Giriş Başarılı");
      navigate("/");
    },
    onError: (error) => {
      if (error.message === "Signin failed! Recheck all your credentials!")
        showToast("error", "Kullanıcı adı veya Şifreniz yanlış");
    },
  });

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={LoginSchema}
      onSubmit={(values) => {
        mutation.mutate(values); // Mutation'ı tetikleme
      }}
    >
      {() => (
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
              isLoading={mutation.isLoading}
              
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
