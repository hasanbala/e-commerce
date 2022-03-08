import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Products, ProductsDetail } from "./products";
import { Profile, ProtectedRoute } from "./profile";
import { NotFound, Main } from "./pages";
import { Footer, Navbar } from "./layout";
import { SignIn, SignUp } from "./forms";
import { ToastContainer } from "react-toastify";
import { Admin } from "./admin";
import { Cart } from "./cart";
import "../node_modules/react-toastify/dist/ReactToastify.css";

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/product/:id" component={ProductsDetail} />
        <ProtectedRoute path="/signin" component={SignIn} signin={true} />
        <ProtectedRoute path="/signup" component={SignUp} signup={true} />
        <Route exact path="/cart" component={Cart} />
        <ProtectedRoute path="/profile" component={Profile} />
        <ProtectedRoute path="/admin" component={Admin} admin={true} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
      <ToastContainer theme="colored" />
    </BrowserRouter>
  );
};
