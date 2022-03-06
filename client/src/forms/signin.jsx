import { useFormik } from "formik";
import { validation as validationSchema } from "./validateIn";
import { Button } from "../components";
import { fetchLogin } from "../pages";
import { useState } from "react";
import { AppUseContext } from "../context";
import "../styles/signup.css";

export const SignIn = ({ history }) => {
  const [hover] = useState("hover");
  const { login } = AppUseContext();
  const { handleSubmit, handleChange, values, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: async (values, bag) => {
        try {
          const response = await fetchLogin({
            email: values.email,
            password: values.password,
          });
          login(response);
          history.push("/profile");
        } catch (error) {
          bag.setErrors({ general: error.response.data.message });
        }
      },
      validationSchema,
    });

  return (
    <div className="signup">
      <h2 className="h2x">Sign IN</h2>
      <div>{errors.general}</div>
      <div className="signup-sub">
        <form className="signup-forms" onSubmit={handleSubmit}>
          <input
            className={errors.email && touched.email ? hover : ""}
            type="email"
            name="email"
            placeholder="email@example.com"
            autoComplete="hidden"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <input
            className={errors.password && touched.password ? hover : ""}
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="current-password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          <div style={{ marginTop: "40px" }}>
            <Button btn="btn-hover color-9" message="Sign Up" />
          </div>
        </form>
      </div>
    </div>
  );
};
