import CartItem from "../components/CartItem";
import { useContext } from "react";
import CartContext from "../Context/Cart/CartContext";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Checkout from "../components/Checkout";

const CartPage = () => {
  const { cartItems, checkout } = useContext(CartContext);

  return (
    <>
      <Heading>
        <h1>
          Shopping Cart
          <span>({cartItems.length})</span>
        </h1>
      </Heading>

      <Layout>
        <div>
          {
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

const Heading = styled.div`
  margin-top: 8rem;
  text-align: center;
`;

const Layout = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  width: 85%;

  @media (max-width: 850px) {
    flex-direction: column;

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
`;

export default CartPage;
