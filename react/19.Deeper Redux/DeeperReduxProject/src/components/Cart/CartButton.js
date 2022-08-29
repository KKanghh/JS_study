import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import { toggleCartActions } from "../../store/toggleCart";
const CartButton = (props) => {
  const dispatch = useDispatch();

  const buttonClickHandler = (event) => {
    dispatch(toggleCartActions.click());
  };
  return (
    <button className={classes.button} onClick={buttonClickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
