import { validation as validationSchema } from "./validateUp";
import { AppUseContext } from "../context";
import { fetchRegister } from "../api";
import { useFormik } from "formik";
import { Button } from "../components";
import { toast } from "react-toastify";
import "../styles/signup.css";

export const SignUp = ({ history }) => {
  const { login, stylex } = AppUseContext();
  const { handleSubmit, handleChange, values, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        passwordConfirm: "",
      },
      onSubmit: async (values, bag) => {
        try {
          const response = await fetchRegister({
            email: values.email,
            password: values.password,
          });
          login(response);
          toast.success("Welcome fresh blood", stylex);
          history.push("/products");
        } catch (error) {
          bag.setErrors({ general: error.response.data.message });
        }
      },
      validationSchema,
    });

  return (
    <div className="signup">
      <h2 className="h2x">Sign Up</h2>
      <div>{errors.general}</div>
      <div className="signup-sub">
        <form className="signup-forms" onSubmit={handleSubmit}>
          <input
            className={errors.email && touched.email ? "hover" : ""}
            type="email"
            name="email"
            placeholder="email@example.com"
            autoComplete="hidden"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <input
            className={errors.password && touched.password ? "hover" : ""}
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="current-password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          <input
            className={
              errors.passwordConfirm && touched.passwordConfirm ? "hover" : ""
            }
            type="password"
            name="passwordConfirm"
            placeholder="Password Confirm"
            autoComplete="current-password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.passwordConfirm}
          />
          <div style={{ marginTop: "40px" }}>
            <Button btn="btn-hover signup" message="Sign Up" />
          </div>
        </form>
      </div>
    </div>
  );
};
