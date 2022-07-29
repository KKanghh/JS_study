import React, { useContext, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import CartContext from "../../store/cart-context";
import Card from "./Card";
import Button from "./Button";
import styles from "./CartModal.module.css";

const CartList = (props) => {
  const ctx = useContext(CartContext);

  const pushPlus = () => {
    ctx.addCart(props.food, 1);
  };

  const pushMinus = () => {
    ctx.addCart(props.food, -1);
    if (props.food.count === 0) ctx.minusCart(props.food);
  };
  return (
    <li>
      <h2>{props.food.name}</h2>
      <div className={styles.eachFood}>
        <span>$ {props.food.price}</span>
        <span>x {props.food.count}</span>
        <div>
          <button onClick={pushMinus}>-</button>
          <button onClick={pushPlus}>+</button>
        </div>
      </div>
    </li>
  );
};

const ModalOverlay = (props) => {
  const ctx = useContext(CartContext);

  const [amount, setAmount] = useState(0);
  useEffect(() => {
    let priceSum = 0;
    ctx.cart.forEach((food) => {
      priceSum += +(food.price * food.count);
    });
    setAmount(priceSum.toFixed(2));
  }, [ctx.cart]);
  let contents = ctx.cart.map((food) => <CartList key={food.id} food={food} />);

  return (
    <Card className={styles.modal}>
      <ul className={styles.cart_list}>{contents}</ul>
      <div className={styles.amount_div}>
        <h2>Total Amount</h2>
        <span>$ {amount}</span>
      </div>
      <div className={styles.button_div}>
        <Button
          className={`${styles.exit_button} ${styles.modal_button}`}
          onClick={props.onClick}
        >
          나가기
        </Button>
        <Button className={styles.modal_button}>주문하기</Button>
      </div>
    </Card>
  );
};

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClick} />;
};

const CartModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <ModalOverlay onClick={props.onClick} />,
        document.getElementById("modal")
      )}
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById("backdrop")
      )}
    </React.Fragment>
  );
};

export default CartModal;
