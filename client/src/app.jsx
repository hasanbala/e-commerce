import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { NotFound, Products, ProductsDetail } from "./pages";
import { Footer, Navbar, Main } from "./layout";
import { SignIn, SignUp } from "./forms";
import { Profile, ProtectedRoute } from "./profile";
import { Cart } from "./cart";

import "../node_modules/react-toastify/dist/ReactToastify.css";

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/product/:product_id" component={ProductsDetail} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/cart" component={Cart} />
        <ProtectedRoute path="/profile" component={Profile} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
      <ToastContainer theme="colored" />
    </BrowserRouter>
  );
};
