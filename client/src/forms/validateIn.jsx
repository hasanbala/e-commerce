import * as yup from "yup";

export const validation = yup.object().shape({
  email: yup.string().email("valid email").required("Required field"),
  password: yup
    .string()
    .min(5, "Should min 5 characters")
    .required("Required field"),
});
