import { Formik, Form } from "formik";
import Separator from "../../separator";
import { RegisterSchema } from "../../../schema/auth";
import CustomInput from "../../Inputs/Input";
import { useMutation } from "@tanstack/react-query";
import { apiClient } from "../../../services/apiClient";
import { showToast } from "../../../utils/toast";
import { useState } from "react";
import VerificationForm from "../verificationCode";
import CustomButton from "../../Button";

export default function RegisterForm({ setCurrentForm }) {
  const [onSuccess, setOnSuccess] = useState(false);
  const [user, setUser] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const mutation = useMutation({
    mutationFn: async (values) =>
      apiClient.signUp(
        values.username.trim(),
        values.email.trim(),
        values.password.trim()
      ),
    onSuccess: (response) => {
      if (response?.status === 200 || response?.status === 201) {
        setUser(response.data); // Kullanıcıyı ayarla
        showToast("success", "Kayıt Başarılı"); // Başarı mesajı göster
        setIsSubmitting(false); // Submit durumunu kapat
        setOnSuccess(true); // Başarı durumunu ayarla
      }
    },
    onError: (error) => {
      const errorMessage = error?.message || "Bilinmeyen bir hata oluştu.";
      if (errorMessage.includes("Signin failed")) {
        showToast("error", "Hatalı Giriş");
      } else {
        showToast("error", errorMessage);
      }
      setIsSubmitting(false); 
    },
  });

  return (
    <>
      {!onSuccess ? (
        <Formik
          initialValues={{ username: "", email: "", password: "" }}
          validationSchema={RegisterSchema}
          onSubmit={(values) => {
            setIsSubmitting(true);
            mutation.mutate(values);
          }}
        >
          {() => (
            <Form className="w-full flex flex-col gap-y-5 max-w-[330px]">
              <CustomInput
                label={"Kullanıcı Adı"}
                isRequired={true}
                placeholder="Kullanıcı adınızı girin"
                name={"username"}
              />
              <CustomInput
                label={"Email"}
                isRequired={true}
                placeholder="Email adresinizi girin"
                name={"email"}
                type={"email"}
              />
              <CustomInput
                label={"Şifre"}
                isRequired={true}
                placeholder="Şifrenizi girin"
                name={"password"}
                type={"password"}
              />
              <div className="flex flex-col gap-y-2.5 mt-2 ">
                <CustomButton
                  className={"secondary"}
                  label="Kayıt Ol"
                  type="submit"
                  isLoading={isSubmitting}
                />
                <Separator />
                <CustomButton
                  label="Giriş Yap"
                  className={"primary"}
                  onClick={() => setCurrentForm("login")}
                />
              </div>
            </Form>
          )}
        </Formik>
      ) : (
        <VerificationForm setCurrentForm={setCurrentForm} user={user} />
      )}
    </>
  );
}
