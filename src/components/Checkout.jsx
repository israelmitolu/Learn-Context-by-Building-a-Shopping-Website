import styled from "styled-components";
import { formatCurrency } from "../utils";
import { useContext } from "react";
import CartContext from "../Context/Cart/CartContext";

const Checkout = () => {
  const { clearCart, handleCheckout, itemCount, total } =
    useContext(CartContext);

  return (
    <Wrapper>
      <p>Total Items:</p>
      <h4>{itemCount}</h4>
      <p>Total Payment:</p>
      <h4>{formatCurrency(total)}</h4>
      <hr />
      <div>
        <CheckBtn onClick={handleCheckout}>CHECKOUT</CheckBtn>
        <ClearBtn onClick={clearCart}>CLEAR</ClearBtn>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 3rem;
  border: 1px solid #000;

  p,
  h4 {
    margin: 1rem;
  }
`;

const CheckBtn = styled.button`
  color: #fff;
  background-color: green;
  border: 1px solid #1a1a1a;
  padding: 0.5rem 1rem;
  line-height: 1.5;
  font-size: 10px;
  border-radius: 0;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
`;

const ClearBtn = styled(CheckBtn)`
  background: transparent;
  color: #000;

  &:hover {
    background-color: red;
    color: #fff;
  }
`;
export default Checkout;
