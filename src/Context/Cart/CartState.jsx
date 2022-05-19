import { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import { sumItems } from "./CartReducer";

//Local Storage
const storage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const CartState = ({ children }) => {
  //Initial State of the cart
  // const initialState = {
  //   cartItems: [],
  //   checkout: false,
  // };

  //Change the code above to that below to get the initial state from local storage
  const initialState = {
    cartItems: storage,
    ...sumItems(storage),
    checkout: false,
  };

  //Set up the reducer
  const [state, dispatch] = useReducer(CartReducer, initialState);

  //Function to handle when an item is added from the store into the Cart
  const addToCart = (payload) => {
    dispatch({ type: "ADD_TO_CART", payload });
  };

  //Function to handle when an item that is in the cart is added again
  const increase = (payload) => {
    dispatch({ type: "INCREASE", payload });
  };

  //Function to handle when an item is removed from the cart
  const decrease = (payload) => {
    dispatch({ type: "DECREASE", payload });
  };

  //Function to remove an item from the cart
  const removeFromCart = (payload) => {
    dispatch({ type: "REMOVE_ITEM", payload });
  };

  //Function to clear the cart
  const clearCart = () => {
    dispatch({ type: "CLEAR" });
  };

  //Function to handle when the user clicks the checkout button
  const handleCheckout = () => {
    dispatch({ type: "CHECKOUT" });
  };

  return (
    //Add the above functions into the Context provider, and pass to the children
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        addToCart,
        removeFromCart,
        increase,
        decrease,
        handleCheckout,
        clearCart,
        // To access the total, we need to pass in the state
        ...state,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
