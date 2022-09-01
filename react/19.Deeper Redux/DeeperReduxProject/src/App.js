import { useSelector, useDispatch } from "react-redux";
import { useEffect, Fragment } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { fetchCartData, sendCartData } from "./store/cart-actions";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const cartClicked = useSelector((state) => state.toggleCart.isClicked);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.toggleCart.notification);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      dispatch(fetchCartData());
      return;
    }
    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {cartClicked && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
