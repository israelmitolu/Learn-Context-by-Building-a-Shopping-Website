import { useContext } from "react";
import CartContext from "../Context/Cart/CartContext";
import styled from "styled-components";
import { formatCurrency } from "../utils";

const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(CartContext);

  return (
    <SingleCartItem>
      <Image src={item.image} alt={item.name} />
      <div>
        {item.name} - {formatCurrency(item.price)}
      </div>
      <CartItemBtn onClick={() => removeFromCart(item.id)}>Remove</CartItemBtn>
    </SingleCartItem>
  );
};

//Styled Components

const SingleCartItem = styled.div`
  border-bottom: 1px solid gray;
  padding: 10px 0;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:nth-child(1) {
    border-top: 1px solid gray;
  }
`;

const CartItemBtn = styled.button`
  margin-left: 2rem;
  padding: 4px 8px;
  border-radius: 4px;
  border: none;
  cursor: pointer;

  &:focus,
  &:active {
    outline: none;
  }
`;

const Image = styled.img`
  width: 100px;
  height: auto;
  padding-right: 2rem;
`;

export default CartItem;
