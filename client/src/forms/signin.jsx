import { validation as validationSchema } from "./validateIn";
import { AppUseContext } from "../context";
import { fetchLogin } from "../api";
import { useFormik } from "formik";
import { useState } from "react";
import { Button } from "../components";
import { toast } from "react-toastify";
import "../styles/signup.css";

export const SignIn = ({ history }) => {
  const [hover] = useState("hover");
  const { login, stylex } = AppUseContext();
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
          toast.success("You're in baby", stylex);
          history.push("/");
        } catch (error) {
          toast.error("The email address was not found", stylex);
          bag.setErrors({ general: error.response.data.message });
        }
      },
      validationSchema,
    });

  return (
    <div className="signup">
      <h2 className="h2x">Sign IN</h2>
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
            <Button btn="btn-hover login" message="Log In" />
          </div>
        </form>
      </div>
    </div>
  );
};
