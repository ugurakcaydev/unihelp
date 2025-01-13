import { Formik, Form } from "formik";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login } from "../../../store/auth/actions";
import CustomButton from "../../Button";
import Separator from "../../separator/index";
import { LoginSchema } from "../../../schema/auth";
import CustomInput from "../../Inputs/Input";
import { showToast } from "../../../utils/toast";
import { useState } from "react";

export default function LoginForm({ setCurrentForm }) {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Login için mutation
  const mutation = useMutation({
    mutationFn: (values) => login(values.email.trim(), values.password.trim()),
    onSuccess: () => {
      showToast("success", "Giriş Başarılı");
      setIsSubmitting(false);
      navigate("/");
    },
    onError: (error) => {
      if (error.message === "Signin failed! Recheck all your credentials!")
        showToast("error", "Kullanıcı adı veya Şifreniz yanlış");
      setIsSubmitting(false);
    },
  });

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={LoginSchema}
      onSubmit={(values) => {
        setIsSubmitting(true);
        mutation.mutate(values);
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
