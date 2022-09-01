import { useSelector, useDispatch } from "react-redux";
import { useEffect, Fragment } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { toggleCartActions } from "./store/toggleCart";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const cartClicked = useSelector((state) => state.toggleCart.isClicked);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.toggleCart.notification);

  useEffect(() => {
    const sendCartDate = async () => {
      dispatch(
        toggleCartActions.showNotification({
          status: "pending",
          title: "sending",
          message: "sending cart data",
        })
      );
      const response = await fetch(
        "https://react-http-10f07-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }

      dispatch(
        toggleCartActions.showNotification({
          status: "success",
          title: "success",
          message: "sending cart data",
        })
      );
    };

    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartDate().catch((error) => {
      dispatch(
        toggleCartActions.showNotification({
          status: "error",
          title: "Error",
          message: "sending cart data failed",
        })
      );
    });
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
