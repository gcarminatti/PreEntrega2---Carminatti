import styleCart from "./CartWidget.module.css";
import { Cartfill } from "react-bootstrap-icons";

const CartWidget = () => {
  return (
    <div className={styleCart["cart-widget"]}>
      <cart className={`${styleCart["cart-icon"]} bi bi-cart-fill `} />
      <div className={styleCart["qty-display"]}>0</div>
    </div>
  );
};

export default CartWidget;
