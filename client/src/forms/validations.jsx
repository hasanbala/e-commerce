import * as yup from "yup";

export const validation = yup.object().shape({
  email: yup.string().email("valid email").required("required field"),
  password: yup
    .string()
    .min(5, "should min 5 characters")
    .required("required field"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "passwords do not match")
    .required("required field"),
});
