import { SHOW_HIDE_CART, REMOVE_ITEM, ADD_TO_CART } from "./CartTypes.js";

// The reducer is listening for an action, which is the type that we defined in the CartTypes.js file
const CartReducer = (state, action) => {
  // The switch statement is checking the type of action that is being passed in
  switch (action.type) {
    // If the action type is SHOW_HIDE_CART, we want to toggle the showingCart state
    case SHOW_HIDE_CART:
      return {
        ...state,
        showingCart: !state.showingCart,
      };
    // If the action type is REMOVE_ITEM, we want to remove the item from the cartItems array
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    // If the action type is ADD_TO_CART, we want to add the item to the cartItems array
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };

    //Return the state if the action type is not found
    default:
      return state;
  }
};

export default CartReducer;
