import * as yup from "yup";

export const validationSchema = yup.object().shape({
  title: yup.string().required("Required field"),
  description: yup
    .string()
    .min(8, "Should min 8 characters")
    .required("Required field"),
  price: yup.string().required("Required field"),
});
