import { toggleCartActions } from "./toggleCart";
import { cartActions } from "./cart";
export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-10f07-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) throw new Error("Could not fetch cart data!");

      const data = await response.json();
      return data;
    };

    try {
      const cart = await fetchData();
      dispatch(cartActions.replaceCart(cart));
    } catch (error) {
      dispatch(
        toggleCartActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      toggleCartActions.showNotification({
        status: "pending",
        title: "sending",
        message: "sending cart data",
      })
    );
    const sendRequest = async () => {
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
    };

    try {
      await sendRequest();
      dispatch(
        toggleCartActions.showNotification({
          status: "success",
          title: "success",
          message: "sending cart data",
        })
      );
    } catch (err) {
      dispatch(
        toggleCartActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed",
        })
      );
    }
  };
};
