import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cart = useSelector((state) => state.cart);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cart.cart.map((eachItem) => (
          <CartItem key={eachItem.id} item={eachItem} />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
