/* eslint-disable react/prop-types */
import { Formik, Form } from "formik";
import Button from "../../Button";
import Separator from "../../separator";
import { RegisterSchema } from "../../../schema/auth";
import CustomInput from "../../Inputs/Input";
import { useMutation } from "@tanstack/react-query";
import { apiClient } from "../../../services/apiClient";
import { showToast } from "../../../utils/toast";
import { useState } from "react";
import VerificationForm from "../verificationCode";

export default function RegisterForm({ setCurrentForm }) {
  const [onSuccess, setOnSuccess] = useState(false);
  const [user, setUser] = useState({});
  const mutation = useMutation({
    mutationFn: (values) =>
      apiClient.signUp(values.username, values.email, values.password),
    onSuccess: () => {
      showToast("success", "Kayıt Başarılı");
      setUser(mutation.data);
      setOnSuccess(true);
    },
    onError: (error) => {
      if (error.message === "Signin failed! Recheck all your credentials!")
        showToast("error", "Hatalı Giriş");
    },
  });
  return (
    <>
      {!onSuccess ? (
        <Formik
          initialValues={{ username: "", email: "", password: "" }}
          validationSchema={RegisterSchema}
          onSubmit={(values) => {
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
                <Button
                  className={"secondary"}
                  label="Kayıt Ol"
                  type="submit"
                />
                <Separator />
                <Button
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
