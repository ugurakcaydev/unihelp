import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email("Geçerli bir e-mail adresi giriniz !")
    .required("Email Zorunlu"),
    // .test(
    //   "is-dogus-email",
    //   "E-posta adresi @dogus.edu.tr uzantılı olmalıdır!",
    //   (value) => value && value.endsWith("@dogus.edu.tr")
    // ),
  password: Yup.string()
    .trim()
    .required("Şifre Zorunlu")
    .min(4, "Şifre 4 karakterden az olamaz!")
    .max(50, "Şifre 50 karakterden fazla olamaz!"),
});

export const RegisterSchema = Yup.object().shape({
  username: Yup.string().required("Gerekli"),
  email: Yup.string()
    .email("Geçerli bir e-mail adresi giriniz!")
    .required("Gerekli"),
  // .test(
  //   "is-dogus-email",
  //   "E-posta adresi @dogus.edu.tr uzantılı olmalıdır!",
  //   (value) => value && value.endsWith("@dogus.edu.tr")
  // ),
  password: Yup.string()
    .trim()
    .required("Gerekli")
    .min(4, "Şifreniz 4 karakterden kısa olamaz")
    .max(50, "Şifreniz 50 karakterden uzun olamaz"),
  // .matches(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&+.])(?=.{6,})/,
  //   "Şifre en az bir küçük harf, bir büyük harf, bir rakam ve bir özel karakter içermelidir."
  // ),
  // repassword: Yup.string()
  //   .trim()
  //   .required("Gerekli")
  //   .oneOf([Yup.ref("password")], "Şifreler eşleşmiyor !"),
});

export const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email("Geçerli bir e-mail adresi giriniz !")
    .required("Gerekli"),
});
