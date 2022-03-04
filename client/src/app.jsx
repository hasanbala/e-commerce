import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navbar, NotFound, Footer, Content } from "./pages";
import { ToastContainer } from "react-toastify";
import { SignIn } from "./forms";
import "../node_modules/react-toastify/dist/ReactToastify.css";

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Content} />
        <Route exact path="/login" component={SignIn} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
      <ToastContainer theme="colored" />
    </BrowserRouter>
  );
};
