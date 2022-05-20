import CartItem from "../components/CartItem";
import { useContext } from "react";
import CartContext from "../Context/Cart/CartContext";
import styled from "styled-components";
import Checkout from "../components/Checkout";
import { Link } from "react-router-dom";

const Cart = () => {
  // Extract the cart state from the context
  const { cartItems, checkout, clearCart } = useContext(CartContext);

  return (
    <>
      <Heading>
        <h1>
          Shopping Cart
          <span>({cartItems.length})</span>
        </h1>
      </Heading>

      {checkout && (
        <CheckoutMsg>
          <h4>Thank you for your purchase!</h4>
          <p>
            Your order has been placed and will be delivered to you within 24
            hours.
          </p>
          <Link to="/">
            <ShopBtn onClick={clearCart}>Continue Shopping</ShopBtn>
          </Link>
        </CheckoutMsg>
      )}

      <Layout>
        <div>
          {
            <CartItemWrapper>
              {/* If cart is empty, display message, and if not, display each cart
            Item in cart: {cartItems.length} */}
              {cartItems.length === 0 ? (
                <h4 style={{}}>Cart is empty</h4>
              ) : (
                <ul>
                  {cartItems.map((product) => (
                    <CartItem key={product.id} product={product} />
                  ))}
                </ul>
              )}
            </CartItemWrapper>
          }
        </div>

        <div>
          {/* Checkout component  */}
          {cartItems.length > 0 && <Checkout />}
        </div>
      </Layout>
    </>
  );
};

//Styled Components
const Heading = styled.div`
  margin-top: 8rem;
  text-align: center;
`;

const Layout = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin: auto;
  width: 85%;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;

    &:nth-child(2) {
      margin-top: 3rem;
    }
  }
`;

const CartItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
`;

const CheckoutMsg = styled.div`
  color: green;
  text-align: center;
  padding: 1.5rem;

  p {
    margin: 0.5rem 0 1.5rem 0;
  }
`;

const ShopBtn = styled.button`
  outline: none;
  border: 1px solid green;
  background-color: transparent;
  padding: 0.75rem;
  color: green;
  margin-top: 1rem;
  cursor: pointer;

  &:hover {
    background-color: green;
    color: white;
  }
`;
export default Cart;
