import React from "react";
import CartItem from "../components/CartItem";
import { useContext } from "react";
import CartContext from "../Context/Cart/CartContext";
import { formatCurrency } from "../utils";
import styled from "styled-components";

const CartPage = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      <Heading>
        <h1>
          Shopping Cart
          <span>({cartItems.length})</span>
        </h1>
      </Heading>

      <CartItemWrapper>
        {/* If cart is empty, display message, and if not, display each cart
            Item in cart: {cartItems.length} */}
        {cartItems.length === 0 ? (
          <h4>Cart is empty</h4>
        ) : (
          <ul>
            {cartItems.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </ul>
        )}
      </CartItemWrapper>
    </>
  );
};

const Heading = styled.div`
  margin-top: 8rem;
  text-align: center;
`;

const CartItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export default CartPage;
