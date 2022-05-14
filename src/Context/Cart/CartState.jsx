import { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import { ADD_TO_CART, REMOVE_ITEM, SHOW_HIDE_CART } from "./CartTypes";

const CartState = ({ children }) => {
  //Initial State of the cart
  const initialState = {
    showingCart: false,
    cartItems: [],
  };

  //Set up the reducer
  const [state, dispatch] = useReducer(CartReducer, initialState);

  //Function to handle when an item is added from the store into the Cart
  const addToCart = (item) => {
    dispatch({
      type: ADD_TO_CART,
      payload: item,
    });
  };

  //Function to Show / Hide the Cart component, and since its a boolean, we won't need to pass any payload
  const showHideCart = () => {
    dispatch({
      type: SHOW_HIDE_CART,
    });
  };

  //Function to remove an item from the cart
  const removeFromCart = (id) => {
    dispatch({
      type: REMOVE_ITEM,
      payload: id,
    });
  };

  return (
    //Add the above functions into the Context provider, and pass to the children
    <CartContext.Provider
      value={{
        showingCart: state.showingCart,
        cartItems: state.cartItems,
        addToCart,
        showHideCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
