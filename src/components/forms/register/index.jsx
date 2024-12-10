/* eslint-disable react/prop-types */
import { Formik, Form } from "formik";
import Button from "../../Button";
import Separator from "../../separator";
import { RegisterSchema } from "../../../schema/auth";
import CustomInput from "../../Inputs/Input";


export default function RegisterForm({ setCurrentForm }) {
  return (
    <Formik
      initialValues={{ email: "", password: "", repassword: "" }}
      validationSchema={RegisterSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {() => (
        <Form className="w-full flex flex-col gap-y-5 max-w-[330px]">
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
          <CustomInput
            label={"Şifre Tekrarı"}
            isRequired={true}
            placeholder="Şifrenizi tekrar girin"
            name={"repassword"}
            type={"password"}
          />
          <div className="flex flex-col gap-y-2.5 mt-2 ">
            <Button className={"secondary"} label="Kayıt Ol" type="submit" />
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
  );
}
