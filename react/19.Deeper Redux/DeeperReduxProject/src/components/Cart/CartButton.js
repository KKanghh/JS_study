import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartActions } from "../../store/toggleCart";
const CartButton = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  let amount = 0;
  if (cart.length > 0) amount = cart.reduce((acc, cur) => acc + cur.amount, 0);

  const toggleCartHandler = (event) => {
    dispatch(toggleCartActions.click());
  };
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{amount}</span>
    </button>
  );
};

export default CartButton;
