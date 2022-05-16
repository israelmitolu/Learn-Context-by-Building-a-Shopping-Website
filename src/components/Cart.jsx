import { useContext } from "react";
import CartContext from "../Context/Cart/CartContext";
import styled from "styled-components";
import { formatCurrency } from "../utils";
import CartItem from "./CartItem";
import closeCircle from "../../assets/icons/close-circle-outline.svg";

const Cart = () => {
  const { showCart, cartItems, showHideCart } = useContext(CartContext);

  return (
    <>
      {/* If cart is open, show cart */}
      {showCart && (
        <CartWrapper>
          <div style={{ textAlign: "right" }}>
            <img
              src={closeCircle}
              alt=""
              onClick={showHideCart}
              className="close-cart-icon"
            />
          </div>
          <CartInnerWrapper>
            {/* If cart is empty, display message, and if not, display each cart
            Item in cart: {cartItems.length} */}
            {cartItems.length === 0 ? (
              <h4>Cart is empty</h4>
            ) : (
              <ul>
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </ul>
            )}
          </CartInnerWrapper>

          <CartTotal>
            <div>Cart Total</div>
            <div></div>
            <div style={{ marginLeft: 5 }}>
              {formatCurrency(
                cartItems.reduce((amount, item) => item.price + amount, 0)
              )}
            </div>
          </CartTotal>
        </CartWrapper>
      )}
    </>
  );
};

//Styled Components

const CartWrapper = styled.div`
  position: fixed;
  top: 60px;
  right: 20px;
  border-radius: 12px;
  background-color: white;
  border: 1px solid gray;
  padding: 10px;
  z-index: 10;
`;

const CartInnerWrapper = styled.div`
  height: max-content;
  max-height: 50vh;
  overflow-y: auto;

  ul {
    li {
      list-style-type: none;
      height: 100px;
      display: flex;
      gap: 5px;
      align-items: center;

      img {
        height: 100%;
        width: 100px;
        object-fit: cover;
      }
    }
  }
`;

const CartTotal = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;

export default Cart;
