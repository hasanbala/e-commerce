import { useMutation, useQueryClient } from "react-query";
import { fetchAdminAddNewProduct } from "../../api";
import { FieldArray, Formik } from "formik";
import { validationSchema } from "./adminProductValidate";
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

export const AdminAddNewProduct = () => {
  const queryClient = useQueryClient();
  const newProductMutation = useMutation(fetchAdminAddNewProduct, {
    onSuccess: () => queryClient.invalidateQueries("admin:products"),
  });

  const handleSubmit = async (values) => {
    const newValues = {
      ...values,
      photos: JSON.stringify(values.photos),
    };
    newProductMutation.mutate(newValues, {
      onSuccess: () => {
        toast.success("Products successfully added", stylex);
      },
    });
  };

  return (
    <div className="signup">
      <h2 className="h2x">ADMİN PRODÜCT EDIT</h2>
      <div className="signup-sub">
        <Formik
          initialValues={{
            description: "",
            title: "",
            price: "",
            photos: [],
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
                <Button btn="btn-hover adminsetup addcart" message="SETUP" />
              </form>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};
