import { fetchAdminOrders } from "../../api";
import { useQuery } from "react-query";
import "../adminstyles/adminOrders.css";

export const AdminOrders = () => {
  const { isLoading, error, data } = useQuery("admin:orders", fetchAdminOrders);

  if (isLoading) return <div>Loading..</div>;
  if (error) return <div>An error has occured..</div>;

  return (
    <div className="a-orders">
      <h2>ORDERS</h2>
      <div className="a-order-sub">
        <table>
          <thead>
            <tr>
              <th>Users</th>
              <th>Address</th>
              <th>Items</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i}>
                <td>{item.user.email} </td>
                <td>{item.adress} </td>
                <td>{item.items.length} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
