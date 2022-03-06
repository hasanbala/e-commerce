import { useFormik } from "formik";
import { validation as validationSchema } from "./validations";
import { Button } from "../components";
import "../styles/contact.css";
import { fetchRegister } from "../pages";

export const SignUp = () => {
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
          console.log(response);
        } catch (error) {
          bag.setErrors({ general: error.response.data.message });
        }
        console.log(values);
      },
      validationSchema,
    });

  return (
    <div className="contact">
      <h2 style={{ color: "#000" }}>Sign Up</h2>
      <div>{errors.general}</div>
      <div className="contact-sub">
        <form className="contact-forms" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="email@example.com"
            autoComplete="hidden"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && (
            <div className="err"> {errors.email} </div>
          )}
          <input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="current-password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && (
            <div className="err"> {errors.password} </div>
          )}
          <input
            type="password"
            name="passwordConfirm"
            placeholder="Password Confirm"
            autoComplete="current-password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.passwordConfirm}
          />
          {errors.password && touched.password && (
            <div className="err"> {errors.password} </div>
          )}
          <Button btn="btn-hover color-5" message="Send" />
        </form>
      </div>
    </div>
  );
};
