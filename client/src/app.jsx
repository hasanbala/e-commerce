import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NotFound, Products, ProductsDetail } from "./pages";
import { ToastContainer } from "react-toastify";
import { Footer, Navbar, Main } from "./layout";
import { SignIn, SignUp } from "./forms";
import { Profile } from "./profile";

import "../node_modules/react-toastify/dist/ReactToastify.css";
import { ProtectedRoute } from "./profile";

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/product/:id" component={ProductsDetail} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <ProtectedRoute path="/profile" component={Profile} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
      <ToastContainer theme="colored" />
    </BrowserRouter>
  );
};
