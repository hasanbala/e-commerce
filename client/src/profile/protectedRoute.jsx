import { Redirect, Route } from "react-router-dom";
import { AppUseContext } from "../context";

export const ProtectedRoute = ({ component: Component, ...props }) => {
  const { logged } = AppUseContext();

  return (
    <Route
      {...props}
      render={(props) => {
        if (logged) {
          return <Component {...props} />;
        }
        return <Redirect to={{ pathname: "/" }} />;
      }}
    ></Route>
  );
};
