import { AppCartContext } from "../context";
import { fetchOrder } from "../api";
import { useState } from "react";
import { Button } from "../components";
import { Modal } from "react-responsive-modal";
import { toast } from "react-toastify";
import "react-responsive-modal/styles.css";
import "../styles/order.css";

const stylex = {
  position: "top-center",
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

const classAnimation = {
  overlayAnimationIn: "customEnterOverlayAnimation",
  overlayAnimationOut: "customLeaveOverlayAnimation",
  modalAnimationIn: "customEnterModalAnimation",
  modalAnimationOut: "customLeaveModalAnimation",
};

export const OrderModal = ({ open, setOpen }) => {
  const { items, emptyCart } = AppCartContext();
  const [address, setAddress] = useState("");
  const changeAddress = (e) => setAddress(e.target.value);
  const onClose = () => setOpen(false);

  const handleAddress = async (e) => {
    e.preventDefault();
    if (address === "") {
      return toast.error("Please write the your address", stylex);
    }
    const proId = items.map((item) => item._id);
    setAddress(address);
    const input = {
      address,
      items: JSON.stringify(proId),
    };
    await fetchOrder(input);
    toast.success("Your order has been received", stylex);
    onClose();
    emptyCart();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        center
        classNames={classAnimation}
        animationDuration={800}
      >
        <div className="order">
          <h2>ORDER</h2>
          <form className="order-forms" onSubmit={handleAddress}>
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={changeAddress}
            />
            <Button btn="btn-hover addcart" message="Order" />
          </form>
        </div>
      </Modal>
    </div>
  );
};
