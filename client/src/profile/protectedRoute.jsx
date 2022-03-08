import { Redirect, Route } from "react-router-dom";
import { AppUseContext } from "../context";

export const ProtectedRoute = ({
  component: Component,
  admin,
  signin,
  signup,
  ...props
}) => {
  const { logged, user } = AppUseContext();
  return (
    <Route
      {...props}
      render={(props) => {
        if (admin && user.role !== "admin") {
          return <Redirect to={{ pathname: "/" }} />;
        }
        if ((signin || signup) && user) {
          return <Redirect to={{ pathname: "/" }} />;
        }
        if ((signin || signup) && !user) {
          return <Component {...props} />;
        }
        if (logged) {
          return <Component {...props} />;
        }
        return <Redirect to={{ pathname: "/" }} />;
      }}
    />
  );
};
