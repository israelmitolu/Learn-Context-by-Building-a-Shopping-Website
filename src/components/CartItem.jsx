import { useContext } from "react";
import CartContext from "../Context/Cart/CartContext";
import styled from "styled-components";
import { formatCurrency } from "../utils";

const CartItem = ({ item }) => {
  const removeItem = useContext(CartContext);

  return (
    <SingleCartItem>
      <img src={item.image} alt={item.name} />
      <div>
        {item.name} - {formatCurrency(item.price)}
      </div>
      <CartItemBtn onClick={() => removeItem(item.id)}></CartItemBtn>
    </SingleCartItem>
  );
};

//Styled Components

const SingleCartItem = styled.div`
  border-bottom: 1px solid gray;
  padding: 10px 0;
  margin-top: 10px;

  &:nth-child(1) {
    border-top: 1px solid gray;
  }
`;

const CartItemBtn = styled.button`
  margin-left: auto;
  padding: 4px 8px;
  border-radius: 4px;
  border: none;
  cursor: pointer;

  &:focus,
  &:active {
    outline: none;
  }
`;

export default CartItem;
