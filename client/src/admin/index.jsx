import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import { AdminOrders } from "./admOrders";
import { AdminHome } from "./admHome";
import {
  AdminAddNewProduct,
  AdminProductsEdit,
  AdminProducts,
} from "./admProducts";
import "./adminstyles/admin.css";

export const Admin = () => {
  const { path, url } = useRouteMatch();
  return (
    <div className="adm">
      <div>
        <ul>
          <li>
            <Link className="adm-link" to={url}>
              HOME{" "}
            </Link>
          </li>
          <li>
            <Link className="adm-link" to={`${url}/orders`}>
              ORDERS{" "}
            </Link>
          </li>
          <li>
            <Link className="adm-link" to={`${url}/products`}>
              PRODÜCTS{" "}
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <Switch>
          <Route exact path={path} component={AdminHome} />
          <Route exact path={`${path}/orders`} component={AdminOrders} />
          <Route exact path={`${path}/products`} component={AdminProducts} />
          <Route
            exact
            path={`${path}/products/new`}
            component={AdminAddNewProduct}
          />
          <Route
            exact
            path={`${path}/products/:id`}
            component={AdminProductsEdit}
          />
        </Switch>
      </div>
    </div>
  );
};
