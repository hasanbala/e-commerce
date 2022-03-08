import { fetchAdminUpdateProduct, fetchProduct } from "../../api";
import { useQuery, useQueryClient } from "react-query";
import { FieldArray, Formik } from "formik";
import { validationSchema } from "./adminProductValidate";
import { useParams } from "react-router-dom";
import { Button } from "../../components";
import { toast } from "react-toastify";
import "../adminstyles/adminproductedit.css";

const stylex = {
  position: "top-center",
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export const AdminProductsEdit = ({ history }) => {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery(["admin:product", id], () =>
    fetchProduct(id)
  );

  const queryClient = useQueryClient();
  const handleSubmit = async (values) => {
    try {
      await fetchAdminUpdateProduct(values, id);
      await queryClient.invalidateQueries(["admin:product", id]);
      toast.success("The item updated", stylex);
      history.push("/admin/products");
    } catch (error) {
      toast.error("An error occured", stylex);
    }
  };

  if (isLoading) return <div>Loading..</div>;
  if (error) return <div>An error has occured..</div>;
  return (
    <div className="signup">
      <h2 className="h2x">ADMİN PRODÜCT EDIT</h2>
      <div className="signup-sub">
        <Formik
          initialValues={{
            description: data.description,
            title: data.title,
            price: data.price,
            photos: data.photos,
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({
            handleBlur,
            handleChange,
            handleSubmit,
            values,
            errors,
            touched,
            isSubmitting,
          }) => (
            <div className="adm-edit-form">
              <form className="admin-forms" onSubmit={handleSubmit}>
                <input
                  className={errors.title && touched.title ? "hover" : ""}
                  type="title"
                  name="title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                  disabled={isSubmitting}
                />
                <input
                  className={
                    errors.description && touched.description ? "hover" : ""
                  }
                  type="description"
                  name="description"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                  disabled={isSubmitting}
                />
                <input
                  className={errors.price && touched.price ? "hover" : ""}
                  type="price"
                  name="price"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.price}
                  disabled={isSubmitting}
                />
                <FieldArray
                  name="photos"
                  render={(arrayHelpers) => (
                    <>
                      {values.photos &&
                        values.photos.map((photo, i) => (
                          <div className="adm-edit-photos" key={i}>
                            <input
                              type="text"
                              name={`photos.${i}`}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={photo}
                              disabled={isSubmitting}
                            />
                            <button
                              type="button"
                              className="btn-adminedit"
                              onClick={() => arrayHelpers.remove(i)}
                            >
                              Remove{" "}
                            </button>
                          </div>
                        ))}
                      <button
                        type="button"
                        className="btn-adminedit addphotos"
                        onClick={() => arrayHelpers.push("")}
                      >
                        Add a photo
                      </button>
                    </>
                  )}
                />
                <Button btn="btn-hover adminsetup addcart" message="UPDATE" />
              </form>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};
