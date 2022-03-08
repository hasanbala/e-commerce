import { useQuery, useMutation, useQueryClient } from "react-query";
import { fetchProductList, fetchAdminDeletes } from "../../api";
import { Button } from "../../components";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "../adminstyles/adminOrders.css";

const stylex = {
  position: "top-center",
  autoClose: 1000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export const AdminProducts = () => {
  const { isLoading, error, data } = useQuery(
    "admin:products",
    fetchProductList
  );
  const queryClient = useQueryClient();
  const deleteMutation = useMutation(fetchAdminDeletes, {
    onSuccess: () => queryClient.invalidateQueries("admin:products"),
  });

  if (isLoading) return <div>Loading..</div>;
  if (error) return <div>An error has occured..</div>;
  return (
    <div className="adm-orders">
      <div className="adm-sub-title">
        <h2>PRODÜCTS</h2>
        <Link to="/admin/products/new">
          <Button btn="btn-hover signup" message="New Item" />
        </Link>
      </div>
      <div className="adm-order-sub">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Created At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i}>
                <td>{item.title} </td>
                <td>{item.price} </td>
                <td>{item.createdAt} </td>
                <td>
                  <Link className="adm-link" to={`/admin/products/${item._id}`}>
                    <Button btn="adm-item-delete edit" message="Edit" />
                  </Link>
                  <button
                    className="adm-item-delete"
                    onClick={() =>
                      deleteMutation.mutate(item._id, {
                        onSuccess: () => {
                          toast.success(
                            "Products successfully deleted",
                            stylex
                          );
                        },
                      })
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
